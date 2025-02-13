import classes from "./Header.module.css";

export function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header_overlay} />
      <video
        className={classes.video}
        src="./video_dev4.mp4"
        loop
        autoPlay
        muted
      />
      <h1>Digitaliser votre entreprise</h1>
    </div>
  );
}
