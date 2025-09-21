
import React, { useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import Navbar from './components/Navbar';
import KpiCard from './components/KpiCard';
import { UserRole, Severity } from './types';
import { MOCK_ALERTS, MOCK_KPI_DATA } from './constants/mockData';
import { ICON_ALERT, ICON_SHIELD_CHECK, ICON_CLOCK, ICON_CPU, ICON_TRENDING_UP, ICON_GEO, ICON_EFFICIENCY } from './constants/icons';

// Import Widgets
import ActiveAlertsTable from './components/widgets/ActiveAlertsTable';
import ThreatIntelFeed from './components/widgets/ThreatIntelFeed';
import IncidentTimeline from './components/widgets/IncidentTimeline';
import MitreAttackMap from './components/widgets/MitreAttackMap';
import AiAgentActions from './components/widgets/AiAgentActions';
import CollaborationPanel from './components/widgets/CollaborationPanel';
import ThreatTrendsChart from './components/widgets/ThreatTrendsChart';
import SocEfficiencyChart from './components/widgets/SocEfficiencyChart';
import ExecutiveSummary from './components/widgets/ExecutiveSummary';
import TeamPerformance from './components/widgets/TeamPerformance';

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>(UserRole.ANALYST);

  const kpiData = useMemo(() => MOCK_KPI_DATA[userRole], [userRole]);

  const renderDashboard = (): ReactNode => {
    switch(userRole) {
      case UserRole.CISO:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="lg:col-span-3 xl:col-span-4"><ExecutiveSummary /></div>
            <div className="lg:col-span-3 xl:col-span-2"><ThreatTrendsChart /></div>
            <div className="lg:col-span-3 xl:col-span-2"><SocEfficiencyChart /></div>
            <div className="lg:col-span-3 xl:col-span-4"><AiAgentActions userRole={userRole} /></div>
          </div>
        );
      case UserRole.MANAGER:
        return (
           <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="lg:col-span-3 xl:col-span-4"><TeamPerformance /></div>
            <div className="lg:col-span-3 xl:col-span-4"><ActiveAlertsTable /></div>
            <div className="lg:col-span-3 xl:col-span-2"><ThreatTrendsChart /></div>
            <div className="lg:col-span-3 xl:col-span-2"><SocEfficiencyChart /></div>
            <div className="lg:col-span-3 xl:col-span-2"><AiAgentActions userRole={userRole} /></div>
            <div className="lg:col-span-3 xl:col-span-2"><IncidentTimeline /></div>
          </div>
        );
      case UserRole.ANALYST:
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="lg:col-span-3 xl:col-span-4"><ActiveAlertsTable /></div>
            <div className="lg:col-span-3 xl:col-span-2"><ThreatIntelFeed /></div>
            <div className="lg:col-span-3 xl:col-span-2"><CollaborationPanel /></div>
            <div className="lg:col-span-3 xl:col-span-2"><AiAgentActions userRole={userRole} /></div>
            <div className="lg:col-span-3 xl:col-span-2"><IncidentTimeline /></div>
            <div className="lg:col-span-3 xl:col-span-4"><MitreAttackMap /></div>
          </div>
        );
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar userRole={userRole} setUserRole={setUserRole} />
      <main className="p-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
          <KpiCard title="Active Alerts" value={MOCK_ALERTS.filter(a => a.status === 'Open').length.toString()} icon={ICON_ALERT} trend={kpiData.activeAlerts.trend} />
          <KpiCard title="Threats Blocked" value={kpiData.threatsBlocked.value} icon={ICON_SHIELD_CHECK} trend={kpiData.threatsBlocked.trend} timeframe="24h" />
          <KpiCard title="MTTD" value={kpiData.mttd.value} icon={ICON_CLOCK} trend={kpiData.mttd.trend} trendDirection="down" />
          <KpiCard title="MTTR" value={kpiData.mttr.value} icon={ICON_CLOCK} trend={kpiData.mttr.trend} trendDirection="down" />
          <KpiCard title="AI Agents Active" value={kpiData.agentsActive.value} icon={ICON_CPU} />
        </div>
        
        {/* Main Dashboard Widgets */}
        {renderDashboard()}
      </main>
    </div>
  );
};

export default App;
