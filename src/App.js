import React, { Component } from 'react';
import List from './List';
import Name from './Name';
import Article from './Article'

class App extends Component {
  render() {

    const title="The Statue of Liberty's torch heads to new museum";
    const datetime="2018-11-22";
    const date="November 22, 2018";
    const author="Kate Farley";
    const article =  <ul>
    <p>The Statue of Liberty's original torch is getting a new home.</p>
    <section>
    <p> Made of copper and gold so that it would shine bright, the first torch took a beating from the weather and was replaced by a replica in <time datetime="1984">1984</time>. It's been stored in the statue's pedestal ever since.</p>
    But visitors will be able to see the original<var> 3,600-pound</var> torch in all its glory at a new Statue of Liberty Museum, which will open on Liberty Island in <time datetime="2019-05">May 2019</time>. The torch was transported there by truck last week, along with a replica model of Lady Liberty's face.
    </section>
    <p>
    <em> <strong>"Although it is not one of the most difficult things we have ever moved,"</strong></em>says Douglas Phelps, who oversaw the relocation of the torch, <em><strong>"it is certainly the most important."</strong></em>
    Not only is the Statue of Liberty the symbol of New York City, she is also a UNESCO World Heritage site under the designation of <i>"Outstanding Universal Value."</i></p>
<p>
    Her full name is Liberty Enlightening the World, and she was designed by Frederic Auguste Bartholdi and built by Gustave Eiffel -- yes, the same guy who built Paris's Eiffel Tower.</p>
<p>
    Lady Liberty was a gift from France to the United States to celebrate the centennial of their nation's independence -- although, somewhat awkwardly, she arrived a decade too late. Nevertheless, President Grover Cleveland formally unveiled her in 1886.</p>
        <section>
<p>

    Since then, the statue has served as a symbol of hope and possibility for many people who entered the United States as immigrants via neighboring Ellis Island.</p>
<p>
    <em><strong>"The original torch is a beautiful object of art and exemplifies the American ideals of freedom and democracy," </strong></em>says John Piltzecker, superintendent of the Statue of Liberty National Monument. That symbolic spirit was bolstered by the decision to inscribe Emma Lazarus' poem <i>"The New Colossus" </i>on the statue's pedestal, which gave Lady Liberty one of her nicknames, <i>"Mother of Exiles."</i></p>
<p>
    The most famous lines in the poem are:<em> <strong>"Give me your tired, your poor / Your huddled masses yearning to breathe free."</strong></em></p>
        </section>
        <section>
        <p>In <time datetime="2017">2017</time>, nearly <var>4.5</var> million people visited Liberty Island.</p>
<p>
    When completed, the Statue of Liberty Museum will be <var>26,000 </var>square feet of history, inspiration and deeper analysis of the statue's symbolism both in the US and around the world.</p>
<p>
    The <i>"inspiration gallery,"</i> which is where the torch will live, will have floor-to-ceiling glass windows looking out at Lower Manhattan, including the World Trade Center.</p>
        </section>
</ul>;
   

    return (
      <div className="App">
       <Article author={author} title={title} datetime={datetime} date={date}>{article}</Article>
      </div>
    );
  }
}

export default App;
