import { registerRoot } from 'remotion';
import { Composition } from 'remotion';
import { DivoHero } from './DivoHero';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DivoHero"
        component={DivoHero}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          mouseX: 960,
          mouseY: 540
        }}
      />
    </>
  );
};

registerRoot(RemotionRoot);
