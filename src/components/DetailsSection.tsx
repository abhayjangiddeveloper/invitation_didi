"use client";

import { CARD_INFO } from "@/utils/constant";
import React from "react";

export default function DetailsSection() {
  return (
    <section className="details-section" id="detailsSection">
      <div className="content-container">
        {/* Bismillah */}
        <div className="bismillah-arabic">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>
        <div className="bismillah-english">
          {"In the name of Allah, \nthe Most Gracious, the Most Merciful"}
        </div>

        {/* Bride Card */}
        <div className="person-card">
          <div className="card-role-label">The Bride</div>
          <h2 className="person-name">{CARD_INFO.brideName}</h2>
          {/* <div className="person-degree">M.A</div> */}
          <div className="person-parent-divider" />
          <div className="parent-title-label">Daughter of</div>
          <div className="parent-name">
            Mrs. {CARD_INFO.brideMother} &amp; Mr. {CARD_INFO.brideFather}
          </div>
        </div>

        {/* Decorative Ampersand */}
        <div className="divider">
          <div className="divider-line"></div>

          <span className="divider-symbol">&amp;</span>

          <div className="divider-line"></div>
        </div>

        {/* Groom Card */}
        <div className="person-card">
          <div className="card-role-label">The Groom</div>
          <h2 className="person-name">{CARD_INFO.groomName}</h2>
          <div className="person-parent-divider" />
          <div className="parent-title-label">Son of</div>
          <div className="parent-name">
            Mrs. {CARD_INFO.groomMother} &amp; Mr. {CARD_INFO.groomFather}
          </div>
        </div>

        {/* Hadith Section */}
        {/* <div className="hadith-card">
          <p className="arabic-text">
            عَنِ ابْنِ عَبَّاسٍ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ
            عَلَيْهِ وَسَلَّمَ:
            <br />" لَمْ نَرَ لِلْمُتَحَابَّيْنِ مِثْلَ النِّكَاحِ "
          </p>

          <p className="translation">
            It was narrated from Ibn Abbas that the Messenger of Allah (ﷺ) said:
            <br />
            <span className="quote">
              "There is nothing like marriage, for two people who love one
              another."
            </span>
          </p>

          <p className="reference">— Sunan Ibn Majah 1847</p>
        </div> */}
      </div>
    </section>
  );
}
