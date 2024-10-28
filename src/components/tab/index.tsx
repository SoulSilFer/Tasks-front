/// src/components/tab/index.tsx

import { AnimatePresence, motion } from 'framer-motion';
import { FC, ReactNode, useState } from 'react';
import * as S from './styles';

type Tab = {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
};

interface Props {
  tabs: Tab[];
}

export const StyledTab: FC<Props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <S.Container>
      <nav>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : ''}>
            {tab.icon} {tab.title}
          </button>
        ))}
      </nav>

      <S.Content>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, height: 0, display: 'hidden' }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0, display: 'hidden' }}
            transition={{ duration: 0.3 }}>
            {tabs[activeTab].children}
          </motion.div>
        </AnimatePresence>
      </S.Content>
    </S.Container>
  );
};
