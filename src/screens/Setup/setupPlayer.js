import { Button,Grid} from '@mui/material';
import React from 'react';

const TeamSetplayer = (data) => {
  return (
<>
<Grid>

<Button>

   {data.name}
</Button>
</Grid>
</>
  );
};

export default TeamSetplayer;
