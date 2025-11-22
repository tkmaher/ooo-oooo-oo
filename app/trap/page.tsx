"use client";

import React from 'react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex';
import 'katex/dist/katex.min.css';

export default function DragCtx() {
  const eq = [
    "$a^2 + b^2 = c^2$",
    "$$\\int_0^1 x^2 dx = \\frac{1}{3}$$",
  
    "$e^{i\\pi} + 1 = 0$",
    "$\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}$",
    "$\\nabla \\times \\vec{B} = \\mu_0 \\vec{J} + \\mu_0\\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$",
    "$\\frac{d}{dx}(e^{kx}) = ke^{kx}$",
    "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$",
    "$\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$",
    "$\\int e^{ax} \\cos(bx)\\,dx = \\frac{e^{ax}(a\\cos bx + b\\sin bx)}{a^2 + b^2}$",
    "$x_{n+1} = r x_n (1 - x_n)$",
    "$F = G\\frac{m_1 m_2}{r^2}$",
    "$H = -\\sum_i p_i \\log p_i$",
    "$i\\hbar \\frac{\\partial}{\\partial t} \\Psi = \\hat{H}\\Psi$",
    "$\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})$",
    "$\\sigma = \\sqrt{\\frac{1}{N}\\sum_{i=1}^N (x_i - \\mu)^2}$",
    "$\\oint_C \\vec{E}\\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$",
    "$\\oint_C \\vec{B}\\cdot d\\vec{l} = \\mu_0 I$",
    "$E = mc^2$",
    "$\\phi(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-(x-\\mu)^2/(2\\sigma^2)}$",
    "$\\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt$",
    "$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$",
    "$\\int_0^\\infty x^n e^{-x}\\,dx = n!$",
    "$\\int \\frac{dx}{1+x^2} = \\arctan x$",
    "$\\frac{d^2y}{dx^2} + \\omega^2 y = 0$",
    "$\\lambda = \\frac{hc}{E}$",
    "$S = k_B \\ln \\Omega$",
    "$\\sum_{k=0}^n \\binom{n}{k} = 2^n$",
    "$\\int_0^1 x^x dx \\approx 0.78343051$",
    "$a_n = \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} f(x) e^{-inx} dx$",
    "$\\det(A) = \\sum_{\\sigma \\in S_n} \\text{sgn}(\\sigma) \\prod_{i=1}^n a_{i,\\sigma(i)}$",
    "$AB = BA$",
    "$[x,p] = i\\hbar$",
    "$L = T - V$",
    "$\\frac{dy}{dx} = y\\tan x$",
    "$y = C e^{\\int P(x) dx}$",
    "$\\int \\ln x\\, dx = x\\ln x - x$",
    "$f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!}(x-a)^n$",
    "$R_{\\mu\\nu} - \\frac{1}{2}Rg_{\\mu\\nu} = 8\\pi T_{\\mu\\nu}$",
    "$pV = nRT$",
    "$v = \\sqrt{v_0^2 + 2 a s}$",
    "$\\omega = 2\\pi f$",
    "$\\int e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}\\operatorname{erf}(x)$",
    "$\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x}$",
    "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
    "$\\oint_C \\vec{F}\\cdot d\\vec{r} = 0$",
    "$\\vec{a} = \\frac{d\\vec{v}}{dt}$",
    "$e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}$",
    "$\\frac{d}{dx} \\ln(1+x) = \\frac{1}{1+x}$",
    "$B(n,k) = \\frac{\\Gamma(n)\\Gamma(k)}{\\Gamma(n+k)}$",
    "$\\zeta(2n) = (-1)^{n+1} \\frac{(2\\pi)^{2n} B_{2n}}{2 (2n)!}$",
    "$\\Delta x \\Delta p \\geq \\frac{\\hbar}{2}$",
    "$\\int \\cos(ax)\\cos(bx) dx$",
    "$\\int_0^{2\\pi} \\cos(nx) dx = 0$",
    "$\\Phi = \\oint \\vec{B} \\cdot d\\vec{A}$",
    "$\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$",
    "$Q = CV$",
    "$I = \\int r^2 dm$",
    "$E_n = -\\frac{13.6\\, \\text{eV}}{n^2}$",
    "$\\frac{dN}{dt} = -\\lambda N$",
    "$N(t) = N_0 e^{-\\lambda t}$",
    "$P(A \\cap B) = P(A)P(B)$",
    "$\\nabla^2 \\phi = 0$",
    "$\\oint_C \\vec{v}\\cdot d\\vec{l} = \\kappa$",
    "$\\vec{p} = m\\vec{v}$",
    "$v = v_0 + at$",
    "$s = v_0 t + \\frac{1}{2}at^2$",
    "$\\int x e^{ax} dx$",
    "$J = \\int \\vec{r} \\times d\\vec{p}$",
    "$\\log(ab) = \\log a + \\log b$",
    "$\\sum_{n=1}^\\infty \\frac{1}{n} = \\infty$",
    "$\\int_0^\\pi \\sin(nx) dx = \\frac{2}{n}(1-(-1)^n)$",
    "$\\theta = \\arccos \\frac{a}{b}$",
    "$\\vec{E} = -\\nabla V$",
    "$\\nabla^2 f = 0$",
    "$\\int x^3 \\ln x dx$",
    "$\\binom{2n}{n} \\sim \\frac{4^n}{\\sqrt{\\pi n}}$",
    "$e^x e^y = e^{x+y}$",
    "$\\int_0^\\infty e^{-ax^2} dx = \\frac{1}{2}\\sqrt{\\frac{\\pi}{a}}$",
    "$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n} = \\ln 2$",
    "$\\frac{d}{dt}(mv) = F$",
    "$\\int_0^1 x^n \\ln x dx = -\\frac{1}{(n+1)^2}$",
    "$\\oint_C \\vec{A}\\cdot d\\vec{l} = \\Phi_B$",
    "$\\sum_{n=1}^\\infty \\frac{1}{n^4} = \\frac{\\pi^4}{90}$",
    "$y' = y(1-y)$",
    "$A = \\pi r^2$",
    "$V = \\frac{4}{3}\\pi r^3$",
    "$x(t) = A\\cos(\\omega t + \\phi)$",
    "$P = IV$",
    "$W = Fd\\cos\\theta$",
    "$k = \\frac{1}{2}mv^2$",
    "$p = \\rho gh$",
    "$T = 2\\pi \\sqrt{\\frac{L}{g}}$",
    "$\\iint_S \\vec{F}\\cdot d\\vec{A}$",
    "$\\frac{dy}{dx} = x^2 y$",
    "$y = e^{x^3/3}$"
  ];

  const links: Record<number, string> = {
    75: "/lyrics",
    34: "/merchandise",
    2: "/provided1",
    35: "/",
    99: "/trap",
  }
  

  return (
    
    <div
      style={{
        width: "75%",
        position: "relative",
        marginTop: "5em",
        marginLeft: "5em",
        
      }}
    >
      100 logics to cut up the world into pieces
      <br/><br/>
      <div style={{right: "50%", position: "absolute", transform: "translate(-50%, 0%)"}}>
        {eq.map((equation, index) => (
            <p key={index}>
              {index in links != null ? <a href={links[index]}><Latex>{equation}</Latex></a> : <Latex>{equation}</Latex>}
              <br/><br/>
            </p>
          ))}
      </div>
    </div>
  );
}
