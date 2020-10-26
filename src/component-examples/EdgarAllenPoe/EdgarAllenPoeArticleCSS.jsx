import React from "react";
import styles from "./edgar.module.css";
import classnames from "classnames";
import "./Rowdies/Rowdies-Bold.ttf";
import "./Rowdies/Rowdies-Light.ttf";
import "./Rowdies/Rowdies-Regular.ttf";

const Address = () => {
  return (
    <address className={styles.address}>
      By April Bingham
      <br />
      Part-time lecturer, <abbr title="Northeastern University">NEU</abbr>
      <br />
      <a href="mailto:a.bingham@northeastern.edu">a.bingham@northeastern.edu</a>
    </address>
  );
};

const EdgarAllenPoeArticle = () => {
  return (
    <div className={styles.page}>
      <div className={styles.tag}>Updated 08/03/2020</div>
      <header
        className={classnames(
          styles.pageChrome,
          styles.pageSection,
          styles.pageHeader
        )}
      >
        <h2>
          <a href="home.html">My Website</a>
        </h2>
        <h3 className={styles.hidden}>not visible</h3>
        <h3 className={styles.noDisplay}>not visible</h3>
        <nav className={styles.mainNav}>
          <ul className={styles.mainNavLinks}>
            <li>
              <a href="home.html">Home</a>
            </li>
            <li>
              <a href="interests.html">Interests</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={classnames(styles.pageSection, styles.pageMain)}>
        <article>
          <header className={styles.articleHeader}>
            <h1 className={styles.articleTitle}>
              The Life and Times of Edgar Allen Poe
            </h1>
            <time className={styles.publishDate} datetime="2019-09-15">
              September 15, 2019
            </time>
            <Address />
          </header>
          <section className={styles.articleSection}>
            <div className={styles.figureWrapper}>
              <figure
                className={classnames(
                  styles.poePhotoWrapper,
                  styles.photoRelative
                )}
              >
                <img
                  alt="1849 &ldquo;Annie&rdquo; daguerreotype"
                  src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Edgar_Allan_Poe%2C_circa_1849%2C_restored%2C_squared_off.jpg/200px-Edgar_Allan_Poe%2C_circa_1849%2C_restored%2C_squared_off.jpg"
                  width="200"
                  height="281"
                  className={styles.poePhoto}
                />

                <figcaption className={styles.poePhotoCaption}>
                  1849 &ldquo;Annie&rdquo; daguerreotype
                </figcaption>
              </figure>

              <figure
                className={classnames(
                  styles.poePhotoWrapper,
                  styles.sectionRelative
                )}
              >
                <img
                  alt="&ldquo;The Raven&rdquo; illustration"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Raven_Manet_D2.jpg/800px-Raven_Manet_D2.jpg"
                  width="200"
                  height="281"
                  className={styles.poePhoto}
                />

                <figcaption className={styles.poePhotoCaption}>
                  <cite>&ldquo;The Raven&rdquo;</cite> illustration
                </figcaption>
              </figure>
            </div>

            <p>
              <strong
                className={styles.highlighted}
                style={{ background: "orange" }}
              >
                Please note: this is not meant to be an exhaustive history of
                Poe&rsquo;s life.
              </strong>
            </p>

            <h3>Summary</h3>
            <p>
              <b>Edgar Allan Poe</b> (born Edgar Poe;
              <time datetime="1809-01-19">January 19, 1809</time> &ndash;
              <time datetime="1849-10-07">October 7, 1849</time>) was an
              American writer, editor, and literary critic. Poe is best known
              for his poetry and short stories, particularly his tales of
              mystery and the macabre.
              <span className={styles.highlighted}>
                He is widely regarded as a central figure of Romanticism in the
                United States and of American literature as a whole
              </span>
              , and he was one of the country&rsquo;s earliest practitioners of
              the short story. He is generally considered the inventor of the
              detective fiction genre and is further credited with contributing
              to the emerging genre of science fiction.<sup>1</sup> He was the
              first well-known American writer to earn a living through writing
              alone, resulting in a financially difficult life and career.
              <sup>1</sup>
            </p>
          </section>
          <section className={styles.articleSection}>
            <h3>Early Life</h3>
            <p>
              <span>
                Poe was born in Boston, the second child of actors David and
                Elizabeth "Eliza" Arnold Hopkins Poe.
              </span>
              <sup>3</sup> His father abandoned the family in 1810, and his
              mother died the following year. Thus orphaned, the child was taken
              in by John and Frances Allan of Richmond, Virginia. They never
              formally adopted him, but he was with them well into young
              adulthood.{" "}
              <span className={styles.redacted}>
                Tension developed later as John Allan and Edgar Poe repeatedly
                clashed over debts, including those incurred by gambling, and
                the cost of Poe&rsquo;s secondary education.
              </span>{" "}
              He attended the University of Virginia but left after a year due
              to lack of money. Edgar Poe quarreled with John Allan over the
              funds for his education and enlisted in the Army in 1827 under an
              assumed name,
              <s className={styles.strike}>Edward J. Crumplestiltskin</s> (this
              has been debunked, see
              <sup>3</sup>)
            </p>
          </section>
          <aside className={styles.signupForm}>
            <header>
              <h3>
                Please sign up for my <b>All About Poe</b> newsletter!
              </h3>
            </header>

            <form action="http://localhost:3000/demo/edgar" method="POST">
              <fieldset className={styles.signupFormField}>
                <legend>Personal Information</legend>
                <div>
                  <label for="full-name">
                    Full name:
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      value="Jane Q. Public"
                    />
                  </label>
                </div>
                <div>
                  <label for="email">
                    Email:
                    <input
                      type="text"
                      id="email"
                      name="email"
                      required="required"
                    />
                  </label>
                </div>
                <div>
                  <label for="telephone">
                    Telephone:
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />
                  </label>
                </div>
                <div className={styles.age}>
                  <header>Age</header>
                  <div className={styles.labelWrapper}>
                    <input type="radio" id="age1" name="age" value="0-21" />
                    <label for="age1">0-21</label>
                  </div>
                  <div className={styles.labelWrapper}>
                    <input type="radio" id="age2" name="age" value="22-41" />
                    <label for="age2">22-41</label>
                  </div>
                  <div className={styles.labelWrapper}>
                    <input type="radio" id="age3" name="age" value="42-61" />
                    <label for="age3">42-61</label>
                  </div>
                  <div className={styles.labelWrapper}>
                    <input type="radio" id="age4" name="age" value="61+" />
                    <label for="age4">61+</label>
                  </div>
                </div>

                <div>
                  <label for="education">
                    Highest Education Level:
                    <select id="education">
                      <option value="High school">High school</option>
                      <option value="Some college">Some college</option>
                      <option value="Bachelors degree">Bachelors degree</option>
                      <option value="Masters degree">Masters degree</option>
                      <option value="Doctorate degree">Doctorate degree</option>
                    </select>
                  </label>
                </div>
              </fieldset>
              <fieldset className={styles.signupFormField}>
                <legend>Interests</legend>
                <div>
                  <label htmlFor="favorite-work">
                    Favorite Poe Work:
                    <select
                      className={styles.favoriteWork}
                      id="favorite-work"
                      name="favorite-work"
                      multiple="multiple"
                    >
                      <optgroup label="Poems">
                        <option value="The Raven">
                          &ldquo;The Raven&rdquo;
                        </option>
                        <option value="Lenore">&ldquo;Lenore&rdquo;</option>
                        <option value="The Bells">
                          &ldquo;The Bells&rdquo;
                        </option>
                      </optgroup>
                      <optgroup label="Stories">
                        <option value="The Black Cat">
                          &ldquo;The Black Cat&rdquo;
                        </option>
                        <option value="The Cask of Amontillado">
                          &ldquo;The Cask of Amontillado&rdquo;
                        </option>
                        <option value="The Facts in the Case of M. Valdemar">
                          &ldquo;The Facts in the Case of M. Valdemar&rdquo;
                        </option>
                      </optgroup>
                    </select>
                  </label>
                </div>
              </fieldset>
              <fieldset className={styles.signupFormField}>
                <input type="submit" value="Subscribe me!" />
              </fieldset>
            </form>

            <div>
              Check out my website,
              <a href="http://allaboutpoe.org" target="_blank" rel="noopener noreferrer">
                allaboutpoe.org
              </a>
              !
            </div>
          </aside>
          <section className={styles.articleSection}>
            <h3>Writing</h3>
            <p>
              It was at this time that his publishing career began with the
              anonymous collection <cite>Tamerlane and Other Poems</cite> (
              <time datetime="1827">1827</time>), credited only to &ldquo;a
              Bostonian&rdquo;. Edgar Poe and John Allan reached a temporary
              rapprochement after the death of Frances Allan in 1829. Poe later
              failed as an officer cadet at West Point, declaring a firm wish to
              be a poet and writer, and he ultimately parted ways with John
              Allan. Poe switched his focus to prose and spent the next several
              years working for literary journals and periodicals, becoming
              known for his own style of literary criticism. His work forced him
              to move among several cities, including Baltimore, Philadelphia,
              and New York City. He married his 13-year-old cousin, Virginia
              Clemm, in 1836.
              <span>
                In January 1845, Poe published his poem{" "}
                <cite>&ldquo;The Raven&rdquo;</cite> to instant success
              </span>
              , but Virginia died of tuberculosis two years after its
              publication. Poe planned for years to produce his own journal
              <cite>The Penn</cite>(later renamed <cite>The Stylus</cite>), but
              he died before it could be produced.
            </p>

            <section className={styles.writingSection}>
              <h4>
                <cite className={styles.citationPoem}>
                  &ldquo;The Raven&rdquo;
                </cite>
              </h4>
              <p>
                Poe&rsquo;s most famous work is{" "}
                <cite>&ldquo;The Raven&rdquo;</cite>. Here is the first stanza:
              </p>
              <blockquote
                className={styles.longQuote}
                cite="https://www.poetryfoundation.org/poems/48860/the-raven"
              >
                Once upon a midnight dreary, while I pondered, weak and weary,
                <br />
                Over many a quaint and curious volume of forgotten lore&ndash;
                <br />
                While I nodded, nearly napping, suddenly there came a tapping,
                <br />
                As of some one gently rapping, rapping at my chamber door.
                <br />
                <q>
                  &lsquo;Tis some visitor,&rquo; I muttered, &ldquo; tapping at
                  my chamber door&ndash;
                  <br />
                  Only this and nothing more.
                </q>
              </blockquote>

              <p>Here is the first stanza translated into French:</p>
              <blockquote
                className={styles.longQuote}
                cite="https://www.poetryfoundation.org/poems/48860/the-raven"
                lang="fr"
              >
                Une fois, par un minuit lugubre, tandis que je
                <br />
                m&rsquo;appesantissais, faible et fatigu&eacute;, sur maint
                <br />
                curieux et bizarre volume de savoir oublié&ndash;
                <br />
                tandis que je dodelinais la t&ecirc;te, somnolant
                <br />
                presque:{" "}
                <q>
                  soudain se fit un heurt, comme de
                  <br />
                  quelqu&rsquo;un frappant doucement, frappant &agrave; la
                  <br />
                  porte de ma chambre&mdash;cela seul et rien de plus.
                </q>
              </blockquote>
            </section>

            <section className={styles.writingSection}>
              <h4>Invented words</h4>
              <p>
                Poe, like Shakespeare, invented a number of words in his
                writing. Here is a list of words and their definitions:
              </p>
              <dl>
                <dt>Frumulous</dt>
                <dd>Interesting or fascinating</dd>
                <dt>Meretrician</dt>
                <dd>One who deserves a number of awards</dd>
              </dl>
            </section>

            <section className={styles.writingSection}>
              <h4>Poems and Stories</h4>

              <table className={styles.articleTable}>
                <caption>Works listed by type</caption>
                <thead>
                  <tr>
                    <th className={styles.workTitle}>Title</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <cite className={styles.citationPoem}>
                        &ldquo;The Black Cat&rdquo;
                      </cite>
                    </td>
                    <td>Story</td>
                  </tr>
                  <tr>
                    <td>
                      <cite className={styles.citationPoem}>
                        &ldquo;The Cask of Amontillado&rdquo;
                      </cite>
                    </td>
                    <td>Story</td>
                  </tr>
                  <tr>
                    <td>
                      <cite className={styles.citationPoem}>
                        &ldquo;The Facts in the Case of M. Valdemar&rdquo;
                      </cite>
                    </td>
                    <td>Story</td>
                  </tr>
                  <tr>
                    <td>
                      <cite className={styles.citationPoem}>
                        &ldquo;Annabel Lee&rdquo;
                      </cite>
                    </td>
                    <td>Poem</td>
                  </tr>
                  <tr>
                    <td>
                      <cite className={styles.citationPoem}>
                        &ldquo;The Bells&rdquo;
                      </cite>
                    </td>
                    <td>Poem</td>
                  </tr>
                  <tr>
                    <td>
                      <cite className={styles.citationPoem}>
                        &ldquo;Lenore&rdquo;
                      </cite>
                    </td>
                    <td>Poem</td>
                  </tr>
                  <tr>
                    <td>
                      <cite className={styles.citationPoem}>
                        &ldquo;The Raven&rdquo;
                      </cite>
                    </td>
                    <td>Poem</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
          <section className={styles.articleSection}>
            <h3>Death</h3>
            <p>
              On <time datetime="1849-10-03">October 3, 1849</time>, Poe was
              found delirious on the streets of Baltimore,
              <q cite="https://en.wikipedia.org/wiki/Edgar_Allan_Poe">
                in great distress, and... in need of immediate assistance
              </q>
              , according to Joseph W. Walker who found him.<sup>5</sup> He was
              taken to the Washington Medical College where he died on
              <time datetime="1849-10-07T09:00:00.000Z">
                Sunday, October 7, 1849 at 5:00 in the morning
              </time>
              .<sup>6</sup> He was not coherent long enough to explain how he
              came to be in his dire condition and, oddly, was wearing clothes
              that were not his own. He is said to have repeatedly called out
              the name "Reynolds" on the night before his death, though it is
              unclear to whom he was referring. Some sources say that
              Poe&rsquo;s final words were{" "}
              <q>
                Lord help my poor <em>soul</em>
              </q>
              .<sup>7</sup>
            </p>
            <p>
              All medical records have been lost, including his death
              certificate. Newspapers at the time reported Poe&rsquo;s death as
              <q>congestion of the brain</q> or <q>cerebral inflammation</q>,
              common euphemisms for death from disreputable causes such as
              alcoholism. The actual cause of death remains a mystery.
              Speculation has included delirium tremens, heart disease,
              epilepsy, chemical poisoning (large traces of C​<sub>8​</sub>H​
              <sub>10​</sub>N​
              <sub>4​</sub>O​<sub>2</sub> were found in Poe&rsquo;s
              bloodstream), syphilis, meningeal inflammation, cholera, and
              rabies.
            </p>
          </section>
          <section className={styles.articleSection}>
            <h3>Legacy</h3>
            <p>
              Poe and his works influenced literature around the world, as well
              as specialized fields such as cosmology and cryptography. He and
              his work appear throughout popular culture in literature, music,
              films, and television. A number of his homes are dedicated museums
              today. The Mystery Writers of America present an annual award
              known as the Edgar Award for distinguished work in the mystery
              genre.
            </p>
          </section>
        </article>
      </main>
      <footer
        className={classnames(
          styles.pageChrome,
          styles.pageSection,
          styles.pageFooter
        )}
      >
        <h3>Citations</h3>
        <ol>
          <li>
            <a href="#cite-1">Allen, page 2</a>
          </li>
          <li>
            <a href="#cite-2">Fox</a>
          </li>
          <li>
            <a href="#cite-3">Benitez, page 34</a>
          </li>
          <li>
            <a href="#cite-4">Benton, page 120</a>
          </li>
          <li>
            <a href="#cite-5">Bramsback, page 65</a>
          </li>
          <li>
            <a href="#cite-6">Burns, page 87</a>
          </li>
          <li>
            <a href="#cite-7">Burns, page 23</a>
          </li>
        </ol>

        <h3>Sources</h3>
        <ul>
          <li id="cite-1">
            Allen, Hervey (1927). &ldquo;Introduction&rdquo;.{" "}
            <cite>The Works of Edgar Allan Poe.</cite> New York: P.F. Collier
            &amp; Son.
          </li>
          <li id="cite-2">
            <cite className={styles.citationArticle}>
              &ldquo;Man Reveals Legend of Mystery Visitor to Edgar Allan
              Poe&rsquo;s Grave &rdquo; . Fox News. Associated Press. August 15,
              2007. Archived from the original on December 22, 2007. Retrieved
              December 15, 2007.
            </cite>
          </li>
          <li id="cite-3">
            Benitez, R, Michael (September 15, 1996).{" "}
            <cite className={styles.citationArticle}>
              &ldquo;Poe&rsquo;s Death Is Rewritten as Case of Rabies, Not
              Telltale Alcohol &rdquo;
            </cite>
            . New York Times. Based on{" "}
            <cite className={styles.citationArticle}>
              &ldquo;A 39-year-old man with mental status change&rdquo;
            </cite>
            . Maryland Medical Journal. 45: 765–769. 1996.
          </li>
          <li id="cite-4">
            Benton, Richard P. (1987).{" "}
            <cite className={styles.citationArticle}>
              &ldquo;Poe&rsquo;s Literary Labors and Rewards&rdquo;
            </cite>
            . In Fisher, Benjamin Franklin IV (ed.).{" "}
            <cite>Myths and Reality: The Mysterious Mr. Poe</cite>. Baltimore:
            The Edgar Allan Poe Society. pp. 1–25. ISBN 978-0-9616449-1-8.
          </li>
          <li id="cite-5">
            Bramsback, Birgit (1970).{" "}
            <cite className={styles.citationArticle}>
              &ldquo; The Final Illness and Death of Edgar Allan Poe: An Attempt
              at Reassessment &rdquo;{" "}
            </cite>
            . Studia Neophilologica. XLII: 40. doi:10.1080/00393277008587456.
          </li>
          <li id="cite-6">
            Bronx HistoricalSociety.org (2007).{" "}
            <cite className={styles.citationArticle}>
              &ldquo;Edgar Allan Poe Cottage&rdquo;
            </cite>
            . Archived from the original on October 11, 2007. Archived from the
            original on 2007-10-11.
          </li>
          <li id="cite-7">
            Burns, Niccole (November 15, 2006).{" "}
            <cite className={styles.citationArticle}>
              &ldquo;Poe wrote most important works in Philadelphia&rdquo;
            </cite>
            . School of Communication &mdash; University of Miami. Archived from
            the original on December 15, 2007. Retrieved October 13, 2007.
          </li>
          <li id="cite-8">
            Cappi, Alberto (1994).{" "}
            <cite className={styles.citationArticle}>
              &ldquo;Edgar Allan Poe&rsquo;s Physical Cosmology&rdquo;
            </cite>
            . Quarterly Journal of the Royal Astronomical Society. 35: 177–192.
            Bibcode:1994QJRAS..35..177C.
          </li>
        </ul>

        <Address />

        <small className={classnames(styles.legal, styles.copyright)}>
          &copy; April Bingham
        </small>
        <small className={classnames(styles.legal, styles.trademark)}>
          &trade; April Bingham
        </small>
      </footer>
    </div>
  );
};

export default EdgarAllenPoeArticle;
