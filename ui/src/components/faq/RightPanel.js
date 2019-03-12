import React from 'react';
import styles from './RightPanel.module.scss';
import {
  Nav,
  NavItem,
} from 'reactstrap';
import classnames from "classnames";

const PanelItem = ({onClick, className, title}) => {
  return (
    <NavItem 
      className={className}
      onClick={onClick}>
          {title}
    </NavItem>
  )  
}
const RightPanel = ({onSelect, faqs, selectedFaqIndex}) => {
  
  const faqItems = faqs.map((item, index) => 
  {
    let className = classnames(styles.NavItem, {
      [styles.active]: !!(index === selectedFaqIndex),
    });

    const onClickHandler = () => {
      onSelect(index)
    }

    return (
      <PanelItem 
        key={index}
        title = {item.title} 
        className={className} 
        onClick={onClickHandler}/>
    )
  })

  return (
    <Nav vertical className={styles.Nav}>
      {faqItems}
    </Nav>
  )
}

export default RightPanel;