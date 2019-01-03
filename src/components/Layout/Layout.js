import React, { Component } from 'react';
import Header from './../Header/Header';
import MainImage from './../MainImage/MainImage';
import AudioPlayer from './../AudioPlayer/AudioPlayer';
import ItemDescription from './../ItemDescription/ItemDescription';
import PreviousNextLinks from './../PreviousNextLinks/PreviousNextLinks';

import data from './../../data/data';

class Layout extends Component {

  render() {
    var pageData = {...data.intro};
    var id = this.props.match.params.id;

    if (id && data[id]) {
      pageData = {...data[id]};
    }

    console.log(this.props);
    console.log(data);
    console.log(pageData);

    return (
      <div>
        <Header title={pageData.title_text} />
        <MainImage fileName={pageData.image_link} />
        <AudioPlayer fileName={pageData.audio_link} />
        <ItemDescription description={pageData.audio_text} />
        <PreviousNextLinks previous={pageData.previous_url} next={pageData.next_url}/>
      </div>
    )
  }
};

export default Layout;
