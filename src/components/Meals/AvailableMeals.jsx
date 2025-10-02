import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [selectedCategory, setSelectedCategory] = useState("Starters");

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-app-21t7-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
          category: responseData[key].category,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals
    .filter((meal) => meal.category === selectedCategory)
    .map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        image={meal.image}
      />
    ));

  return (
    <>
      <section className={classes["menu-header"]}>
        <div>
          <h2 className={classes.header}>Our Menu ↡</h2>
        </div>
      </section>
      <section className={classes["menu-images"]}>
        <Card>
          <div>
            <div className={classes["neko-noodles-icon"]}></div>
            <div className={classes["neko-noodles-logo-text"]}></div>
          </div>
        </Card>
      </section>
      <section className={classes.meals}>
        <div>
          <div className={classes.tabs}>
            {["Starters", "Sushi", "Meals", "Drinks", "Mochi", "Special"].map(
              (cat) => (
                <button
                  key={cat}
                  className={`${classes.tabButton} ${
                    selectedCategory === cat ? classes.active : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              )
            )}
          </div>
          <Card>
            <ul id="menu">{mealsList}</ul>
          </Card>
        </div>
      </section>
    </>
  );
};

export default AvailableMeals;
