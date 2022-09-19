import React from 'react';

function NavigationDots({ active }) {
  return (
    <div className='app__navigation'>
      {['Home', 'Sobre mim', 'Projetos', 'Skills', 'Contacto'].map((item,index) => (
          <a 
          key={item+index}
          href={`#${item}`}
          className="app__navigation-dot"
          style={active=== item ? {backgroundColor: '#313BAC' } : { }}
          />
      ))}
    </div>
  );
}

export default NavigationDots;
