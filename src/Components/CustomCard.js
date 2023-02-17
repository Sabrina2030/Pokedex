import * as React from 'react';
import { useState, useEffect } from 'react';
import { Card, Avatar, IconButton, CardHeader,CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { Chart as ChartJS, BarElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, LinearScale, CategoryScale, Tooltip, Legend);

export default function MediaCard({ image, logo, pokemon,  weaknesses}) {
  console.log(pokemon.stats);
  const baseStats = pokemon.stats?.map((stat) => stat.base_stat);
  console.log(baseStats);
  


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
    <Card sx={{ maxWidth: 345, backgroundColor:'rgb(164,164,164)', border: '1px solid yellow' }}>
      <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'white',  boxShadow: 5, padding: '5px', margin: '2px', fontSize: '5px' }} aria-label="recipe" src={logo}>
            </Avatar>
          }
          titleTypographyProps={{variant:'h4', alig: 'left' }}
          title={pokemon.name}
      />
      <CardMedia
        sx={{ 
          minHeight: '200px', 
          maxHeight: '200px', 
          padding: "15px", 
          objectFit: "contain", 
          backgroundColor:'skyblue', 
          width: "auto",
          border: '1px solid black'
          }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Info
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Weight: {pokemon.weight}
          High: {pokemon.height}
          <div>
            <label>Abilities: </label>
            {pokemon.abilities?.map((ability) => (
              <label>{ability.ability.name} </label>
            ))}
          </div>
          <Bar data={data} options={options} />
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