# Bowling score kata in JS

<table>
    <tr><td>1</td><td colspan="2">4</td></tr>
    <tr><td colspan="3">5</td></tr>
    <tr><td>4</td><td colspan="2">5</td></tr>
    <tr><td colspan="3">14</td></tr>
    <tr><td>6</td><td> colspan="2"/</td></tr>
    <tr><td colspan="3">29</td></tr>
    <tr><td>5</td><td colspan="2">/</td></tr>
    <tr><td colspan="3">49</td></tr>
    <tr><td>10</td><td colspan="2">X</td></tr>
    <tr><td colspan="3">60</td></tr>
    <tr><td>0</td><td colspan="2">1</td></tr>
    <tr><td colspan="3">61</td></tr>
    <tr><td>7</td><td colspan="2">/</td></tr>
    <tr><td colspan="3">77</td></tr>
    <tr><td>6</td><td colspan="2">/</td></tr>
    <tr><td colspan="3">97</td></tr>
    <tr><td>10</td><td colspan="2">X</td></tr>
    <tr><td colspan="3">117</td></tr>
    <tr><td>2</td><td>/</td><td>6</td></tr>
    <tr><td colspan="3">133</td></tr>
</table>

The game consists of 10 frames as shown above. In each frame the player has two opportunities to knock down 10 pins. The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.
A spare is when the player knocks down all 10 pins in two tries. The bonus for that frame is the number of pins knocked down by the next roll. So in frame 3 above, the score is 10 (the total number knocked down) plus a bonus of 5 (the number of pins knocked down on the next roll.)
A strike is when the player knocks down all 10 pins on his first try. The bonus for that frame is the value of the next two balls rolled.
In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame. However no more than three balls can be rolled in tenth frame.
