import React from 'react'

function KnowledgeBaseSvg({ navIndex, activeNavIndex }) {
  const color = `${navIndex === activeNavIndex ? '#6837EF' : '#696D8C'}`

  return (
    <svg className={`${navIndex === activeNavIndex ? 'rotate-90' : 'rotate-0'} transition-transform duration-200 ease-in-out`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 0.75H12C14.8995 0.75 17.25 3.10051 17.25 6V12C17.25 14.8995 14.8995 17.25 12 17.25H6C3.10051 17.25 0.75 14.8995 0.75 12V6C0.75 3.10051 3.10051 0.75 6 0.75ZM6.00002 2.25002C3.92895 2.25002 2.25002 3.92895 2.25002 6.00002V12C2.25002 14.0711 3.92895 15.75 6.00002 15.75H12C14.0711 15.75 15.75 14.0711 15.75 12V6.00002C15.75 3.92895 14.0711 2.25002 12 2.25002H6.00002ZM6.51867 8.45879L8.22201 10.1402L11.4133 6.27264C11.6769 5.95315 12.1496 5.90786 12.4691 6.17148C12.7886 6.43511 12.8339 6.90782 12.5703 7.22731L8.85714 11.7273C8.57676 12.0671 8.06528 12.0932 7.75176 11.7837L5.4649 9.52629C5.17012 9.2353 5.16704 8.76044 5.45803 8.46565C5.74903 8.17087 6.22389 8.1678 6.51867 8.45879Z" fill={color}/>
    </svg>
  )
}

export default KnowledgeBaseSvg