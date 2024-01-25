import Layout from '@/components/Layouts';
import Skeleton from '@/components/skeleton/common/Skeleton';
import { VmComponent } from '@/components/vm/VmComponent';
import { useBosComponents } from '@/hooks/useBosComponents';
import { networkId } from '@/utils/config';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

const ExportData = () => {
  const router = useRouter();
  const components = useBosComponents();
  const { address } = router.query;

  return (
    <VmComponent
      src={components?.exportData}
      skeleton={<Skeleton className="h-12" />}
      props={{
        network: networkId,
        id: address,
      }}
    />
  );
};

ExportData.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default ExportData;