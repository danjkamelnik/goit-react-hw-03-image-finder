import { Component } from "react";
import { Header, Form, Button, Label, Input } from "./Searchbar.styled";
import PropTypes from 'prop-types';

export class Searchbar extends Component {
    state = {
        value: ''
    }

    handleChange = (evt) => {
        this.setState({ value: evt.target.value })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.onSubmit(this.state.value)
        this.setState({ value: '' })
    }

    render() {
        return(
            <Header>
                <Form onSubmit = { this.handleSubmit }>
                    <Button type="submit">
                        <Label className="button-label">Search</Label>
                    </Button>

                    <Input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value = { this.state.value }
                        onChange = { this.handleChange }
                    />
                </Form>
            </Header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,  
  }