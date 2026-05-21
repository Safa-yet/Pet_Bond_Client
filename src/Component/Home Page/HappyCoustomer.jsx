import React from 'react';

const HappyCoustomer = () => {
    return (
        <div>
            <section className="py-xl max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
  <h2 className="font-lg text-lg text-on-surface mb-lg text-center">
    Happy Beginnings
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
    
    {/* Story Card 1 */}
    <div className="bg-surface-container-lowest p-lg rounded-3xl border border-outline-variant/30 flex flex-col md:flex-row gap-lg shadow-sm">
      
      <img
        className="w-full md:w-48 h-48 rounded-2xl object-cover shadow-md"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6LDc7ILWvEAXLBsE6KeZ0_XwRmiI8u600cmf0OmwXTq8L47L8ND9pO7H2wd4sryUyr4GxNbHz2r1lOu8QG3yWhrQvTW-d9XOLlY84Izo1MU_6aGd67AQbOXNtxVjEjo-hTr9hZJzQoM71WRSde4LerMJ_x_GzhlFVwRlDr1_EG5c3hLTrFqpwZNy2S_wLtgBWQQHPW2o6WLtVj1_z5NPbqKgexiFZXWP8CUlaDxGg_BdBBzl3Qoiwfx24T-LlGDpBE-cI3abLagKh"
        alt="Happy couple with adopted dog"
      />

      <div className="flex-1">
        
        <div className="flex text-pri mb-sm">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>

          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>

          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>

          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>

          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        </div>

        <p className="italic text-on-surface-variant mb-md leading-relaxed">
          "Adopting Max through Maw Care was the best decision we've ever
          made. The medical records were perfect and the matching process was
          so professional."
        </p>

        <p className="font-label-md text-label-md text-pri">
          — Sarah & James with Max
        </p>
      </div>
    </div>

    {/* Story Card 2 */}
    <div className="bg-surface-container-lowest p-lg rounded-3xl border border-outline-variant/30 flex flex-col md:flex-row gap-lg shadow-sm">
      
      <img
        className="w-full md:w-48 h-48 rounded-2xl object-cover shadow-md"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKukb4LMU4EMHScj4iOW5g9HkoXhWQYruSIehsvO3cgVcMu6tjRDDzK2jZbpjJ3FLQRrgAffx61Ce5HK1q-NGn7yZq_gLzDuI44SmGlGXmDqKWIVO5K3vbuiHd9-v2sGHfip3WY1zoq4Thncq1WwF8qeUjNWWGMpYA0OBGyiw07gAEDclD3NtnlXLDlhk-vxzsl8fO8VcmasjoLZczOQVT0xCUaOrkTJjlHDUbW_z_8XQ0esJWE3t8BPDZZdaARnjTg6hAspY-ZTMM"
        alt="Woman with adopted kitten"
      />

      <div className="flex-1">
        
        <div className="flex text-pri mb-sm">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>

          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>

          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>

          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>

          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        </div>

        <p className="italic text-on-surface-variant mb-md leading-relaxed">
          "Maw Care truly cares about the pets and the owners. Luna is the
          perfect addition to my quiet apartment. The support team is
          incredible."
        </p>

        <p className="font-label-md text-label-md text-pri">
          — Elena with Luna
        </p>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default HappyCoustomer;