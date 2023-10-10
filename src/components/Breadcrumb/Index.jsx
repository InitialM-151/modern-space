import React from 'react';
import PropTypes from 'prop-types';

export default function Breadcrumb({ list }) {
  return (
    <section className='bg-gray-100 py-8 px-4'>
      <div className='container mx-auto'>
        <ul className='breadcrumb'>
          {list?.map?.((item, index) => {
            const arias = index === list?.length ? { 'arias-laber': 'current-page' } : {};
            return (
              <li key={item.url}>
                <a href={item.url} {...arias}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// Breadcrumb.PropTypes = {
//   list: PropTypes.array.isRequired,
// };
