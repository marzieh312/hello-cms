import React from 'react';

const FaqSection = ({faqItem: { title, body }}) => {
  // Here I assumed that the cms always returns the secure data so no need to purify it
  const createMarkup = () => ({
    __html: body
  });
  
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

export default FaqSection;