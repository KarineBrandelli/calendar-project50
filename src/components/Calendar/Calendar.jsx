import { Link } from "react-router-dom";
import "./Calendar.css";

export const Calendar = () => {
  return (
    <main className="calendar-days">
      <ul className="days">
        <li><Link to={`day/1`}>1</Link></li>
        <li><Link to={`day/2`}>2</Link></li>
        <li><Link to={`day/3`}>3</Link></li>
        <li><Link to={`day/4`}>4</Link></li>
        <li><Link to={`day/5`}>5</Link></li>
        <li><Link to={`day/6`}>6</Link></li>
        <li><Link to={`day/7`}>7</Link></li>
        <li><Link to={`day/8`}>8</Link></li>
        <li><Link to={`day/9`}>9</Link></li>
        <li><Link to={`day/10`}>10</Link></li>
        <li><Link to={`day/11`}>11</Link></li>
        <li><Link to={`day/12`}>12</Link></li>
        <li><Link to={`day/13`}>13</Link></li>
        <li><Link to={`day/14`}>14</Link></li>
        <li><Link to={`day/15`}>15</Link></li>
        <li><Link to={`day/16`}>16</Link></li>
        <li><Link to={`day/17`}>17</Link></li>
        <li><Link to={`day/18`}>18</Link></li>
        <li><Link to={`day/19`}>19</Link></li>
        <li><Link to={`day/20`}>20</Link></li>
        <li><Link to={`day/21`}>21</Link></li>
        <li><Link to={`day/22`}>22</Link></li>
        <li><Link to={`day/23`}>23</Link></li>
        <li><Link to={`day/24`}>24</Link></li>
        <li><Link to={`day/25`}>25</Link></li>
        <li><Link to={`day/26`}>26</Link></li>
        <li><Link to={`day/27`}>27</Link></li>
        <li><Link to={`day/28`}>28</Link></li>
        <li><Link to={`day/29`}>29</Link></li>
        <li><Link to={`day/30`}>30</Link></li>
        <li><Link to={`day/31`}>31</Link></li>
        <li><Link to={`day/32`}>32</Link></li>
        <li><Link to={`day/33`}>33</Link></li>
        <li><Link to={`day/34`}>34</Link></li>
        <li><Link to={`day/35`}>35</Link></li>
        <li><Link to={`day/36`}>36</Link></li>
        <li><Link to={`day/37`}>37</Link></li>
        <li><Link to={`day/38`}>38</Link></li>
        <li><Link to={`day/39`}>39</Link></li>
        <li><Link to={`day/40`}>40</Link></li>
        <li><Link to={`day/41`}>41</Link></li>
        <li><Link to={`day/42`}>42</Link></li>
        <li><Link to={`day/43`}>43</Link></li>
        <li><Link to={`day/44`}>44</Link></li>
        <li><Link to={`day/45`}>45</Link></li>
        <li><Link to={`day/46`}>46</Link></li>
        <li><Link to={`day/47`}>47</Link></li>
        <li><Link to={`day/48`}>48</Link></li>
        <li><Link to={`day/49`}>49</Link></li>
        <li><Link to={`day/50`}>50</Link></li>
      </ul>
    </main>
  )
}