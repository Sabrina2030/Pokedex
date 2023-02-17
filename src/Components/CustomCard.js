import * as React from 'react';
import '../styles/types.css';
import { Card, Avatar, IconButton, CardHeader,CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { Chart as ChartJS, BarElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, LinearScale, CategoryScale, Tooltip, Legend);

export default function MediaCard({ image, logo, pokemon,  weaknesses, stats, types}) {

  const baseStats = pokemon.stats?.map((stat) => stat.base_stat);
  // console.log(baseStats);

  const data = {
    labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
    datasets: [
      {
        label: 'Base Stats',
        data: baseStats,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'rgb(164,164,164)', border: '3px solid RGB(221 50 212)' }}>
      <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'white',  boxShadow: 5, padding: '1px', margin: '2px', fontSize: '5px' }} aria-label="recipe" src={logo}>
            </Avatar>
          }
          titleTypographyProps={{variant:'h4', alig: 'left' }}
          title={pokemon.name}
      />
      <div style={ {display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'} }>
        {pokemon.types?.map((type) => (
          <label className= {type.type.name} >{type.type.name} </label>
        ))}
      </div>
      <CardMedia
        sx={{ 
          minHeight: '180px', 
          maxHeight: '180px', 
          padding: "15px", 
          objectFit: "contain", 
          backgroundColor:'rgb(48,167,215)', 
          width: "auto",
          border: '2px solid black'
          }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Info
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div style={ { margin: '10px'} }>
            <label>Height: </label>
            <label>{pokemon.height} </label>
            <label>Weight: </label>
            <label>{pokemon.weight} </label>
          </div>
      
          <div style={ { margin: '10px'} }>
            <label>Abilities: </label>
            {pokemon.abilities?.map((ability) => (
              <label>{ability.ability.name} </label>
            ))}
          </div>
          <div>
               <Bar data={data} options={options} />
          </div>
          {/* <div>
            <label>Weaknesses: </label>
            {weaknesses?.map((weakness) => (
              <label>{weakness} </label>
            ))}
          </div> */}

        </Typography>
      </CardContent>

    </Card>
  );
}