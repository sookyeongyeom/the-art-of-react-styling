import React from 'react';
import styles from './CSSModule.module.scss';
// 클래스 이름과 해당 이름을 고유화한 값이 키-값으로 매핑된 객체 형태로 전달됨

const CSSModule = () => {
  return (
    // className={[styles.wrapper, styles.inverted].join(' ')}
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
