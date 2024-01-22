import styles from "./Success.module.css";
function Success() {
  return (
    <div>
      <div className="section_wrapper">
        <div className={styles.success}>
          <img src="icon-thank-you.svg" alt="img" />
          <h1> Thank you! </h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Success;
