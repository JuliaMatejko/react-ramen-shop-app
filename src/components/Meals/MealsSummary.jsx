import Card from "../UI/Card";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <>
      <section className={classes.herologo}>
        <Card>
          <img src="/assets/neko-noodles-logo.png" alt="Neko Noodles Logo" />
        </Card>
      </section>
      <section className={classes["summary-1"]} id="about">
        <Card>
          <div className={classes.b1}>
            <h3>
              Welcome to<span style={{ fontStyle: "normal" }}>🌸</span>
            </h3>
          </div>
          <div className={classes.b2}>
            <h3>Neko Noodles Ramen</h3>
          </div>
          <div className={classes.b3}>
            <h3>
              <u>
                — a unique, Japanese ramen shop <br />
                and cat café
              </u>
            </h3>
          </div>
          <div className={classes.b4}>
            <img
              width="165px"
              height="auto"
              src="/assets/rrramen.jpg"
              alt="ramen bowl"
            />
          </div>
          <div className={classes.b5}>
            <h3>where every bowl 🍜</h3>
          </div>
          <div className={classes.b6}>
            <h3>
              comes with a side of <br />
              whiskers. 🐾
              <br />
              🐾
            </h3>
          </div>
          <div className={classes.b7}>
            <div className={classes["cat-image-box"]}></div>
          </div>
        </Card>
      </section>
      <section className={classes["summary-2"]}>
        <Card>
          <div>
            <p>
              🐾 Enjoy{" "}
              <em>
                <strong>handcrafted ramen</strong>,{" "}
                <strong>traditional dishes</strong>, <strong>matcha</strong>,
              </em>{" "}
              and{" "}
              <em>
                <strong>mochi</strong>...
              </em>
            </p>
          </div>
        </Card>
        <Card>
          <div className={classes["ramen"]}></div>
          <div className={classes["sushi-set"]}></div>
          <div className={classes["sushi-plate"]}></div>
          <div className={classes["chicken-ramen"]}></div>
        </Card>
      </section>
      <section className={classes["summary-3"]}>
        <Card>
          <div className={classes["cats-looking-1"]}></div>
          <div className={classes["cats-sitting"]}></div>
          <div className={classes["cats-eating-2"]}></div>
          <div className={classes["cats-looking-2"]}></div>
        </Card>
        <Card>
          <div>
            <p>
              🐾 ...in the company of our <strong><em>cats</em></strong>, who love to
              lounge, play, and be gently petted while you dine. 🐱🍲
            </p>
          </div>
        </Card>
      </section>
      <section className={classes["summary-4"]}>
        <Card>
          <h3> ~ What Makes Us Special ~</h3>
          <hr></hr>
        </Card>
        <Card>
          <div className={classes["strawberry-matcha"]}>
            <span>
              1. 🍜🍣 Authentic <strong>flavors</strong>.
            </span>
          </div>
          <div className={classes["restaurant-1"]}>
            <span>
              2. ✨☕ <strong>Cozy</strong> vibes.
            </span>
          </div>
          <div className={classes["cat-sleeping"]}>
            <span>
              3. 😸🐈‍⬛ Friendly <strong>cats</strong>.
            </span>
          </div>
        </Card>
        <Card>
          <div className={classes["ramen-bowls"]}>
            <span>
              4. 🍥😻{" "}
              <em>
                <strong>Purr-fect ramen</strong>
              </em>{" "}
              🥇
            </span>
          </div>
        </Card>
      </section>
      <section className={classes["summary-5"]}>
        <Card>
          <div id="address" className={classes["cat-neon"]}></div>
        </Card>
        <Card>
          <div>
            <p>
              Our restaurant is also a great spot to meet friends, enjoy a meal,
              study, or work remotely.
            </p>
            <p>Come for the food, stay for the cats!</p>
          </div>
        </Card>
        <Card>
          <div >
            <b>Address:</b>
            <p>
              Neko Noodles
              <br />7 Catford Court <br />
              Camden Market
              <br /> London NW1 9ZZ <br />
              United Kingdom
            </p>
          </div>
          <img src="/public/assets/neko-noodles-icon.png" alt="Neko Noodles Icon" />
        </Card>
      </section>
    </>
  );
};

export default MealsSummary;
