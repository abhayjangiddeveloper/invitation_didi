"use client";

import React from "react";

interface FamilyMember {
  name: string;
  role?: string;
}

const familyMembers: FamilyMember[] = [
  {
    name: "Fakhruddin Quazi & Shamshad Begum",
  },
  {
    name: "Moinuddin Quazi & Parveen Begum",
  },
  {
    name: "Aadil Quazi, all Quazi Family Sawar, all relatives & friends",
  },
];

export default function ComplimentsSection() {
  return (
    <section className="compliments-section" id="complimentsSection">
      <div className="compliments-header">
        <span className="comp-line" />
        <span className="comp-label">With Best Compliments From</span>
        <span className="comp-line" />
      </div>

      <div className="comp-ornament">❧</div>

      <div className="comp-family-list">
        {familyMembers.map((member, index) => (
          <div key={member.name} className="comp-member">
            <h3 className="comp-name">{member.name}</h3>
            {member.role && <p className="comp-role">{member.role}</p>}
            {index < familyMembers.length - 1 && (
              <div className="comp-divider" />
            )}
          </div>
        ))}
      </div>

      <div className="comp-near-dear">✦ Near &amp; Dear ✦</div>
    </section>
  );
}
