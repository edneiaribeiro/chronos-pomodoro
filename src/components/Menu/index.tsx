import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      //document.documentElement.setAttribute('data-theme', newTheme); // Isso é uma má prática em React
      return newTheme;
    });
  }

  // useEffect(() => {
  //   console.log('useEffect sem depencencias', Date.now());
  // }); // Executa em toda renderização.
  // Cuidado com loops!
  // Quando usar? Para efeitos colaterais que precisam rodar sempre que o componente renderiza

  // useEffect(() => {
  //   console.log('useEffect com array de dependências vazio', Date.now());
  // }, []); // Executa apenas na montagem.
  // Cuidados com variáveis usadas dentro do useEffect
  // Quando usar? Para efeitos colaterais que precisam rodar apenas uma vez, na montagem do componente

  useEffect(() => {
    // console.log('useEffect com dependência', theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    return () => {
      // console.log('cleanup do useEffect com dependência', theme, Date.now());
    };
  }, [theme]); // Executa na montagem e quando a dependência mudar.
  // Cuidado com variáveis usadas dentro do useEffect
  // Quando usar? Para efeitos colaterais que precisam rodar quando uma ou mais variáveis específicas mudam

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a Página de Configurações'
        title='Ir para a Página de Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
