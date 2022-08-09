import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";

export function Run() {

  const [cooldown, setcooldown] = useState(5);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!cooldown) return;
    const intervalId = setInterval(() => {
      setcooldown(cooldown - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [cooldown]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        return oldProgress + 0.5
        //const diff = Math.random() * 10;
        //return Math.min(oldProgress + diff, 100);
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
        <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
    <br></br>

      {
    
    
          <div style={{
            height: "400px", width: "400px", margin: "0", background: "blue"
          }}></div>
      }
    </div>
  )
}