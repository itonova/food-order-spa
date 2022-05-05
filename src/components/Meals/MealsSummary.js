import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Your favorite food delivered to you!</h2>
      <p>
        Choose from our wide selection of healthy dishes, prepared with high-quality
        ingredients by professional chefs and enjoy your meals in the comfort of
        your home!
      </p>
      <p>
        We offer fast delivery to your doorstep and we always make sure to use
        quality bio-degradable packaging.
      </p>
    </section>
  );
};

export default MealsSummary;
