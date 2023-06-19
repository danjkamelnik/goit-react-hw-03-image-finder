import React, { Component } from 'react';
import { BASE_URL, API_KEY } from './API';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Main, Title, Error } from './App.styled';
import { Loading } from './Loader/Loader';



export class App extends Component {
  
  state = {
    search: null,
    images: [],
    page: 1,
    error: null,
    isLoading: false,
    status: 'idle'
  }

  componentDidUpdate(_, prevState) {
    if(prevState.search !== this.state.search || prevState.page !== this.state.page) {
      this.setState({
        isLoading: true
      })

      this.fetchFn()
    }
  }

  fetchFn = () => {
    const {search, page } = this.state

    fetch(`${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=15`)
      .then(response => response.json())
      .then(({ hits }) => 
        this.setState(({ images }) => ({
          images: [...images, ...hits],
          isLoading: false
        }))
      )
      .catch(error => this.setState({ error, status: 'rejected' }))
      .finally(() => this.setState({ status: 'resolved' }))
  }

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }))
  }

  onSubmit = value => {
    this.setState({
      search: value,
      page: 1,
      images: []
    })
  }

  render() {

    const { status, isLoading, images, error, page } = this.state

    return(
      <Main>
        <Searchbar onSubmit = { this.onSubmit }/>
        {status === 'idle' && <Title>Type something in search</Title>}
        {isLoading && <Loading />}
        {status === 'resolved' && (
          <ImageGallery images = { images } />
        )}
        {this.state.status === 'rejected' && (
          <Error>{ error.massage }</Error>
        )}
        {this.state.images.length !== 0 && (images.length/15) === page && <Button onClick = { this.onLoadMore } />}
      </Main>
    )
  }

}