import { RefObject, useRef } from "react";
import styles from "./contact.module.scss";
import emailjs from "@emailjs/browser";

function Contact({
  contactContainerRef,
}: {
  contactContainerRef: RefObject<HTMLDivElement>;
}) {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    if (form.current === null) return;
    emailjs
      .sendForm(
        "service_ndt8zst",
        "template_9bf4sfp",
        form.current,
        "XdGjPDxNuKEsZmCNS"
      )
      .then(
        (result) => {
          alert("성공적으로 이메일이 전송되었습니다.");
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert("이메일이 전송이 실패되었습니다.");
        }
      );
  };

  return (
    <div className={styles.container} ref={contactContainerRef}>
      <div className={styles.contact_message}>Please get in touch!</div>
      <div>
        If you have any inquiries or questions, please feel free to contact me
      </div>
      <div>"I would appreciate the opportunity to collaborate together"</div>
      <form className={styles.whole_input} onSubmit={sendEmail} ref={form}>
        <div className={styles.input_wrap_box}>
          <div>
            <input
              name="user_name"
              className={styles.name_input}
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <input
              name="user_email"
              className={styles.email_input}
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>
        <div>
          <div>
            <textarea
              name="message"
              className={styles.contact_textarea}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
        </div>

        <div className={styles.button_wrap}>
          <button type="submit" className={styles.send_button}>
            send
          </button>
        </div>
      </form>
    </div>
  );
}
export default Contact;
