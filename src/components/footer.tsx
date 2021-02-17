import React from 'react'

const Footer: React.FC = () => {
  return (
    <section className='content-section'>
      <p>
        &copy; Anthropomorphic Events of Ontario 2020 - {new Date().getFullYear()}
      </p>
      <p>
        This program and its source code are licensed under the Affero GNU General Public License version 3 or later.
        <br />
        You may find the original AGPL at{' '}
        <a
          title="Link to the original AGPL on the Free Software Foundation's GNU website"
          href='https://www.gnu.org/licenses/agpl-3.0.en.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://www.gnu.org/licenses/agpl-3.0.en.html
        </a>
        .
        <br />
        You may view and download the source code for this program at{' '}
        <a
          title="Link to the GitHub repository for this website's code"
          href='https://github.com/Furnal-Equinox/donations-reader'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://github.com/Furnal-Equinox/donations-reader
        </a>
        .
        <br />
        This program uses Tania Rascia's Primitive UI Sass boilerplate under the MIT license she placed on it. You may view it at{' '}
        <a
          title="Link to Tania Rascia's website for her Primitive UI CSS / Sass boilerplate"
          href='https://taniarascia.github.io/primitive/index.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          Tania Rascia's website for Primitive
        </a>
        .
        She has a link to the GitHub repository for the CSS / Sass code on the website.
      </p>
    </section>
  )
}

export default Footer
