import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import styles from '@/src/pages/game/components/dashboard/Dashboard.module.scss';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';

function DashboardComponent() {
  return (
    <div className={styles.dashboard}>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>
        <NumberComponent
          value={0.009}
          style={'currency'}
        />
      </div>
      <div>
        <IconComponent icon="home" />
      </div>
      <div>1</div>
      <div>1</div>
    </div>
  );
}

export default DashboardComponent;
