import React, { Component } from 'react';
import { Box, Button, Image, Grid} from 'grommet';
import styled from "styled-components";

const GridWrapper = styled(Box)`
    flex-grow: 1;
    direction: row;
    align-items: center;
    padding-top: 2rem;      
`

export default class ResultArt extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedID: 0,
        }
    };

    render(){

        return(
            <GridWrapper>
                <Grid
                    columns={["small", "small","small", "small"]}
                    rows={"meduim"}
                    gap="medium"
                    margin="40px"
                >
                    {this.props.images.map(image => (
                        <Button
                            hoverIndicator
                            style={{ outline: 'none' }}
                            key={image.id}
                            onClick={() => { this.props.selectImage(image.id) }}
                        >
                            <Box border=
                                {this.props.selectedImage === image.id ? { color: "accent-1", size: "4px" } : { color: "black", size: "4px" }}
                                round="small"
                                height="small"
                                width="small"
                                key={image.id}
                                style={{focus: {outline:0}}}
                        >
                                <Image
                                    src={"data:image/jpeg;base64," + image.img}
                                    fit="cover"
                                    style={{ height: '100%', zIndex: "-1"}}
                                />
                            
                        </Box>
                        </Button>
                    ))}
                </Grid>
            </GridWrapper>    
        );
    }
}