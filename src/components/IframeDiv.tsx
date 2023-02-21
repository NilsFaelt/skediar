import styles from "./iframeDiv.module.css";

const IframeDiv = () => {
  return (
    <div className={styles.container}>
      <iframe
        src='https://www.aarsleff-rorteknik.se/tre-skal-att-valja-relining-i-fastigheter/?gclid=CjwKCAiA0cyfBhBREiwAAtStHPuEuIRLdquuG_XJZiHtWJZZXMTZbedQO6UIhbd_OVRRl5MXCb1aCxoCjQMQAvD_BwE'
        name='iframe3'
        width='300px'
        height='150px'
        style={{ border: "none", margin: "0.7rem" }}
      ></iframe>
      <iframe
        src='https://www.tripadvisor.se/'
        name='myIFrame'
        scrolling='auto'
        width='300px'
        height='150px'
        style={{
          margin: "0.7rem",
          border: "none",
        }}
      ></iframe>
      <iframe
        src='https://offerta.se/bygg-och-renovering/renovering/?gkw=hantverkare&gm=b&gid=145471444983&device=c&cid=25&gclid=CjwKCAiA0cyfBhBREiwAAtStHMCDustOv9yB8DlmJkfg4Ql6VFLLda1dOhajxb7Ho7QssOcFFnRZ2hoCEQ8QAvD_BwE'
        name='myIFrame'
        scrolling='auto'
        width='300px'
        height='150px'
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default IframeDiv;
