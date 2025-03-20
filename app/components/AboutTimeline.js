// app/components/AboutTimeline.js
"use client";

import { useEffect } from "react";
import styles from "./AboutTimeline.module.css";

export default function AboutTimeline() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(`.${styles.timelineItem}`)
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      year: "1995",
      title: "Die Gründung",
      content:
        "Meister Hans Müller gründet den Betrieb als Ein-Mann-Unternehmen in seiner GarageMit Leidenschaft für das Handwerk und einem alten Transporter begann unsere Geschichte.",
    },
    {
      year: "2005",
      title: "Expansion",
      content:
        "Erweiterung auf 10 Mitarbeiter und Bezug der aktuellen Betriebsräume im Industriegebiet. Der erste Auszubildende schließt seine Lehre ab.",
    },
    {
      year: "2015",
      title: "Innovation",
      content:
        "Wir erweitern unser Angebot um erneuerbare Energien und Smart-Home-Lösungen. Unser Team wächst auf 25 Mitarbeiter, darunter 5 Meister und 8 Auszubildende.",
    },
    {
      year: "Heute",
      title: "Die Zukunft",
      content:
        "Heute zählt unser Unternehmen zu den führenden Installationsbetrieben der Region. Mit über 30 Mitarbeitern und modernster Ausrüstung bleiben wir unserem Motto treu: Qualität, Zuverlässigkeit und Kundennähe.",
    },
  ];

  return (
    <section className="min-h-screen py-16 px-4 md:px-4 relative overflow-hidden page-content md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
      <div className="mx-auto">
      <h1 className="text-xl font-semibold leading-tight mb-8 flex items-center">
          Über Uns
          <span className="flex-1 h-px bg-[var(--accent-color)] max-w-[120px] ml-4"></span>
        </h1>
      </div>
      
      <div className="container max-w-7xl mx-auto w-full flex items-center">
        

        <div className={`${styles.timelineContainer} w-full`}>
          <div className={styles.timelineLine}></div>

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.timelineContent}>
                <div
                  className={styles.yearMarker}
                  style={{ background: "var(--accent-color)" }}
                >
                  {milestone.year}
                </div>
                <div className={`${styles.card} mx-auto`}>
                  <h3 className="text-2xl font-bold mb-4 text-center">{milestone.title}</h3>
                  <p className="text-[var(--text-color-secondary)]">
                    {milestone.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
