import Card from "./Card";
import classes from './Errormodal.module.css'
import Button from "./Button";
const ErrorModal=props=>{
    return(<div>
        <div className={classes.backdrop} />
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onconfirm}>Okay</Button>
          </footer>
        </Card>
      </div>)



}
export default ErrorModal;