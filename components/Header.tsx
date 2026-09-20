"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
      <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#topo" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt=""
            width={48}
            height={32}
            className={styles.logoImg}
          />
          Dândala Sousa
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className="btn btn--primary" onClick={() => setOpen(false)}>
            Agendar atendimento
          </a>
        </nav>

        <button
          className={styles.toggle}
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      </header>
    </>
  );
}
