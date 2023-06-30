import Navbar from "./navbar";
import styles from './AuthorizationPage.module.css'; 

export default function Authorization() {
  return (
    <>
    <Navbar /> 
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.spinner}></div>
        <h1>Authorization Page</h1>
        <form className={styles.form}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" name="surname" required />

          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" required>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </> 
  );
} 