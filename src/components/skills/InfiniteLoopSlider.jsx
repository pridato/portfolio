import { DURATION, ROWS, TAGS, TAGS_PER_ROW } from '../../utils/globales';
import Skill from './skill';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = () => (
  <div className="tag-list mt-10">
    {[...new Array(ROWS)].map((_, i) => (
      <div
        key={i}
        className="loop-slider"
        style={{
          '--duration': `${random(DURATION - 5000, DURATION + 5000)}ms`,
          '--direction': i % 2 === 0 ? 'normal' : 'reverse'
        }}
      >
        <div className="inner">
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Skill text={tag} key={tag} />
          ))}
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Skill text={tag} key={`${tag}-duplicate`} />
          ))}
        </div>
      </div>
    ))}
    <div className="fade" />
  </div>
);

export default InfiniteLoopSlider;