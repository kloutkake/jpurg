import type { Metadata } from "next";
import styles from "../../styles/resume.module.css";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Julian Purgahn",
};

export default function Resume() {
  return (
    <div className={styles["resume-container"]}>
      <header>
        <h1 className={styles["headerTitle"]}>Julian Purgahn</h1>
        <p>
          Denton, TX 76208 | 409.221.8971 |{" "}
          <a className={styles["headerLink"]} href="mailto:purgahja@gmail.com">
            purgahja@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            className={styles["headerLink"]}
            href="https://www.linkedin.com/in/julianpurgahn"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/julianpurgahn
          </a>{" "}
          | GitHub:{" "}
          <a
            className={styles["headerLink"]}
            href="https://github.com/kloutkake"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/kloutkake
          </a>{" "}
          | Website:{" "}
          <a
            className={styles["headerLink"]}
            href="https://jpurg.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            jpurg.com
          </a>
        </p>
      </header>

      <section>
        <h2 className={styles["sectionTitle"]}>Career Profile</h2>
        <p>
          Dedicated Cybersecurity graduate from the University of North Texas, an ABET
          accredited program, with both theoretical and practical knowledge. Seeking employment 
          in a Systems Security Analyst or SOC Analyst related field.  Looking for a proactive,
          detail-oriented, and dynamic work environment. Strong understanding of OSI model,
          TCP/IP protocols, OWASP top 10, and general knowledge of information security
          principles and practices such as CIA and STRIDE. Skilled at object-oriented
          programming, data structures, algorithms, databases, communication, organization, and
          documentation. Highly motivated, team player, problem solver, and excited to start my
          journey in the industry of Cybersecurity.
        </p>
      </section>

      <section>
        <h2 className={styles["sectionTitle"]}>Education</h2>
        <p className={styles["innerText"]}>
          <strong>University of North Texas</strong> | Denton, Texas | May 2024
        </p>
        <p className={styles["innerText"]}>Bachelor of Science | Cybersecurity | ABET accredited</p>
        <p>
          <em>Relevant Coursework:</em> Systems Programming, Computer Networks, Systems
          Security, Forensics, Secure Ecommerce, Network Administration, Database Systems,
          Secure Software Development, Wireless Network Protocols
        </p>
      </section>

      <section>
        <h2 className={styles["sectionTitle"]}>Technical Skills</h2>
        <ul>
          <li>
            <strong>Programming Languages/Frameworks:</strong> C/C++, Python, Bash, HTML/CSS,
            JavaScript, React, Next.js
          </li>
          <li>
            <strong>Cybersecurity Tools and Libraries:</strong> Nmap, Wireshark, wfuzz, ffuf,
            Apache, Nginx, Scapy, John the Ripper
          </li>
          <li>
            <strong>Operating Systems:</strong> Windows, Linux (Arch: EndeavourOS, Debian:
            Ubuntu, Kali)
          </li>
          <li>
            <strong>Certifications:</strong> NSA and DHS CAE-CDE Cybersecurity Certificate, UNT.
            EC Council Certified Cybersecurity Technician (CCT). (ISC)² Certified in Cybersecurity
            (CC). Studying for CompTIA Security+.
          </li>
          <li>
            <strong>Other:</strong> Visual Studio, Git, VMware Workstation, VirtualBox, Prisma,
            Microsoft Office Suite, Vim
          </li>
        </ul>
      </section>

      <section>
        <h2 className={styles["sectionTitle"]}>Engineering Projects</h2>
        <h3 className={styles["subsectionTitle"]}>UNT, DoS/DDoS IDS/IPS | May 2023</h3>
        <ul>
          <li>
            Collaborated with a team of 4 to develop Python-based tools for executing DoS/DDoS,
            SYN Flood, Ping Flood, and Firefox tab attacks.
          </li>
          <li>
            Engineered an Intrusion Detection and Prevention System (IDPS) using multiprocessing
            and Scapy to mitigate network attacks.
          </li>
          <li>
            Monitored packets and CPU usage, implementing automatic IP blocking and process
            termination upon threshold breaches.
          </li>
        </ul>
        <h3 className={styles["subsectionTitle"]}>Policies and Procedures | Jan 2023</h3>
        <ul>
          <li>
            Developed policies for an international healthcare organization spanning North America
            and Europe, guided by NIST SP-800 series.
          </li>
          <li>
            Designed comprehensive procedures for data protection (PII, PCI, FERPA, PHI), technology
            (VPN, encryption), and security (incident response, risk assessment).
          </li>
          <li>
            Established user access protocols including password management, application development,
            and multi-factor authentication (MFA).
          </li>
        </ul>
      </section>

      <section>
        <h2 className={styles["sectionTitle"]}>Employment Experience</h2>
        <h3 className={styles["subsectionTitle"]}>UNT Recreation Center, Lifeguard/Headguard/LGI/WSI(S) | Denton, TX | Aug 2022 – Present</h3>
        <ul>
          <li>
            Supervised a team of lifeguards, ensuring adherence to safety protocols and effective
            coverage of the pool area.
          </li>
          <li>
            Instructed lifeguard trainees and conducted certification courses, providing comprehensive
            training in lifesaving techniques and emergency response.
          </li>
          <li>
            Managed the Water Safety Instructor (WSI) program, overseeing class schedules, instructor
            performance, and student progress.
          </li>
        </ul>
      </section>

      <section>
        <h2 className={styles["sectionTitle"]}>Professional & Student Organizations</h2>
        <p>
          <strong>UNT Cyber Security and Information Club</strong> 
        </p>
        <p className={styles["innerText"]}>
        | Aug 2022 – May 2024
        </p>
        <p>
          <strong>North Texas ISSA (Information Systems Security Association)</strong>
        </p>
        <p>
        | Dec 2023 – Present
        </p>
      </section>
    </div>
  );
}

