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
        Seeking opportunities as a SOC or Security Analyst, while also open to Data Analysis, Jr. Systems Administration, and entry-level IT roles. Highly motivated team player and problem solver, eager to contribute to a dynamic work environment that embraces challenges and fosters growth. Passionate about starting a career in Cybersecurity.
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
        <h2 className={styles["sectionTitle"]}>Certifications</h2>
        <p className={styles["innerText"]}>Certified in Cybersecurity (CC), (ISC)<sup>2</sup> - Oct 2023</p>
        <p className={styles["innerText"]}>Certified Cybersecurity Technician (CCT), EC Council - Dec 2023</p>
        <p className={styles["innerText"]}>NSA and DHS CAE-CDE Cybersecurity Certificate, UNT - May 2024</p>
      </section>

      <section>
        <h2 className={styles["sectionTitle"]}>Technical Skills</h2>
        <p className={styles["innerText"]}>Programming Languages/Frameworks:</p>
        <ul>
          <li>
            C/C++, Python, Bash, HTML/CSS, JavaScript, React, Next.js
          </li>
        </ul>
        <p className={styles["innerText"]}>Cybersecurity Tools and Libraries:</p>
        <ul>
          <li>
            Nmap, Wireshark, wfuzz, ffuf, Apache, Nginx, Scapy, John the Ripper
          </li>
        </ul> 
        <p className={styles["innerText"]}>Operating Systems:</p>
        <ul>
          <li>
            Windows, Linux (Arch: EndeavourOS, Debian: Ubuntu, Kali)
          </li>
        </ul> 
        <p className={styles["innerText"]}>Other:</p>
        <ul>
          <li>
            Visual Studio, Git, VMware Workstation, VirtualBox, Prisma, Microsoft Office Suite, Vim
          </li>
        </ul>
      </section>

      <section>
        <h2 className={styles["sectionTitle"]}>Engineering Projects</h2>
        <h3 className={styles["subsectionTitle"]}>UNT, DoS/DDoS IDS/IPS (GitHub) | May 2023</h3>
        <ul>
          <li>
            Collaborated with a team of 4 to develop Python-based tools for executing DoS/DDoS, SYN Flood, Ping Flood, and Firefox tab attacks.
          </li>
          <li>
            Engineered an Intrusion Detection and Prevention System (IDPS) using multiprocessing and Scapy to mitigate network attacks.
          </li>
          <li>
            Monitored packets and CPU usage, implementing automatic IP blocking and process termination upon threshold breaches.
          </li>
        </ul>
        <h3 className={styles["subsectionTitle"]}>Policies and Procedures | Jan 2023</h3>
        <ul>
          <li>
            Developed policies for an international healthcare organization spanning North America and Europe, guided by NIST SP-800 series.
          </li>
          <li>
            Designed comprehensive procedures for data protection (PII, PCI, FERPA, PHI), technology (VPN, encryption), and security (incident response, risk assessment).
          </li>
          <li>
            Established user access protocols including password management, application development, and multi-factor authentication (MFA).
          </li>
        </ul>
        <h3 className={styles["subsectionTitle"]}>CVE Exploitation & Vulnerability Research Projects (GitHub) | Sep 2024</h3>
        <ul>
          <li>
            Developed Proof of Concept (PoC) scripts using Python to exploit critical known vulnerabilities.
          </li>
          <li>
            Configured and tested vulnerable environments, conducting in-depth vulnerability research and automating exploit testing with Python and Bash scripts.
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
        <p className={styles["innerText"]}>UNT Cyber Security and Information Club | Aug 2022 – May 2024</p>
        <ul>
          <li>Participated in the UCLA LA CTF focusing on Web, Forensics, and OSINT</li>
        </ul>  
        <p className={styles["innerText"]}>North Texas ISSA (Information Systems Security Association) | Dec 2023 – Present</p>
        <ul>
          <li>Volunteered at the 2024 12<sup>th</sup> Annual Cybersecurity Conference</li>
        </ul>  
      </section>
    </div>
  );
}

