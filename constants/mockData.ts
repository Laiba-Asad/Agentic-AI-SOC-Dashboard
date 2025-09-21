
import type { Alert, ThreatIntel, Incident, AiAction, ChatMessage, MitreTactic, KpiData } from '../types';
import { Severity, UserRole } from '../types';

export const MOCK_ALERTS: Alert[] = [
  { id: 'AL-1', timestamp: '2023-10-27T10:45:00Z', severity: Severity.CRITICAL, source: 'EDR-Endpoint-7', description: 'Ransomware behavior detected on DC-01', status: 'Open', assignedTo: 'D. Jones', aiTriaged: true },
  { id: 'AL-2', timestamp: '2023-10-27T10:42:00Z', severity: Severity.HIGH, source: 'Firewall-Perimeter', description: 'Multiple failed logins from 185.220.101.32', status: 'In Progress', assignedTo: 'S. Smith', aiTriaged: true },
  { id: 'AL-3', timestamp: '2023-10-27T10:30:00Z', severity: Severity.MEDIUM, source: 'CloudTrail-AWS', description: 'Unusual IAM role assumption by user "dev-admin"', status: 'Open', assignedTo: null, aiTriaged: true },
  { id: 'AL-4', timestamp: '2023-10-27T10:15:00Z', severity: Severity.LOW, source: 'IPS-Core', description: 'Potential port scan from 10.1.1.5', status: 'Closed', assignedTo: 'AI Agent', aiTriaged: true },
  { id: 'AL-5', timestamp: '2023-10-27T09:55:00Z', severity: Severity.HIGH, source: 'EDR-Endpoint-12', description: 'Powershell script execution with encoded commands', status: 'In Progress', assignedTo: 'S. Smith', aiTriaged: true },
  { id: 'AL-6', timestamp: '2023-10-27T09:30:00Z', severity: Severity.INFO, source: 'VPN-Gateway', description: 'User "j.doe" connected from new location', status: 'Closed', assignedTo: 'AI Agent', aiTriaged: true },
  { id: 'AL-7', timestamp: '2023-10-27T08:05:00Z', severity: Severity.MEDIUM, source: 'O365-Audit', description: 'Anomalous file downloads from SharePoint by "m.maxwell"', status: 'Open', assignedTo: null, aiTriaged: true },
];

export const MOCK_THREAT_INTEL: ThreatIntel[] = [
  { id: 'TI-1', source: 'AlienVault OTX', title: 'New "Lockbit 3.0" IOCs identified', type: 'Feed', timestamp: '2023-10-27T10:00:00Z'},
  { id: 'TI-2', source: 'Dark Web Monitor', title: 'Chatter about exploiting CVE-2023-4567', type: 'Dark Web', timestamp: '2023-10-27T08:30:00Z'},
  { id: 'TI-3', source: 'KrebsOnSecurity', title: 'Phishing campaign targeting financial institutions', type: 'OSINT', timestamp: '2023-10-27T05:00:00Z'},
  { id: 'TI-4', source: 'Recorded Future', title: 'APT-C-23 (Two-Tailed Scorpion) activity increase', type: 'Feed', timestamp: '2023-10-26T21:00:00Z'},
];

export const MOCK_INCIDENT: Incident = {
  id: 'INC-001',
  title: 'Ransomware Outbreak on Domain Controller',
  status: 'Active',
  timeline: [
    { timestamp: '2023-10-27T10:45:00Z', event: 'Critical Alert: Ransomware behavior detected on DC-01.' },
    { timestamp: '2023-10-27T10:46:10Z', event: 'AI Agent "Hunter" isolated DC-01 from the network.' },
    { timestamp: '2023-10-27T10:46:15Z', event: 'Incident INC-001 created automatically.' },
    { timestamp: '2023-10-27T10:47:00Z', event: 'Analyst D. Jones assigned to incident.' },
  ],
};

export const MOCK_AI_ACTIONS: AiAction[] = [
  { id: 'AIA-1', timestamp: '2023-10-27T10:46:10Z', agent: 'Hunter', action: 'Isolate Endpoint', status: 'Executed', details: 'Isolated DC-01 (10.0.0.5) based on ransomware heuristics.' },
  { id: 'AIA-2', timestamp: '2023-10-27T10:43:00Z', agent: 'Guardian', action: 'Block IP', status: 'Pending Approval', details: 'Recommended blocking 185.220.101.32 due to brute force activity.' },
  { id: 'AIA-3', timestamp: '2023-10-27T10:15:30Z', agent: 'Scout', action: 'Log & Monitor', status: 'Executed', details: 'Low-confidence port scan from 10.1.1.5, added to watchlist.' },
  { id: 'AIA-4', timestamp: '2023-10-27T08:10:00Z', agent: 'Guardian', action: 'Suspend User', status: 'Rejected', details: 'Recommended suspending "m.maxwell", overridden by manager.' },
];

export const MOCK_CHAT_MESSAGES: ChatMessage[] = [
    { id: 'MSG-1', user: 'S. Smith', avatar: 'https://picsum.photos/seed/s.smith/40/40', message: 'Looking at the powershell alert AL-5. Looks like Cobalt Strike.', isAI: false, timestamp: '10:55 AM' },
    { id: 'MSG-2', user: 'D. Jones', avatar: 'https://picsum.photos/seed/d.jones/40/40', message: 'Agreed. I am already containing DC-01. Can you check other endpoints for similar activity?', isAI: false, timestamp: '10:56 AM' },
    { id: 'MSG-3', user: 'SOC AI Copilot', avatar: 'https://picsum.photos/seed/ai/40/40', message: 'Suggestion: I can run a threat hunting query across all EDR agents for the parent process ID and SHA256 hash associated with AL-5.', isAI: true, timestamp: '10:57 AM' },
];

export const MOCK_MITRE_TACTICS: MitreTactic[] = [
    { id: 'TA0001', name: 'Initial Access', techniques: [{id: 'T1566', name: 'Phishing', active: false}, {id: 'T1190', name: 'Exploit Public-Facing App', active: false}]},
    { id: 'TA0002', name: 'Execution', techniques: [{id: 'T1059', name: 'Command & Scripting', active: true}, {id: 'T1204', name: 'User Execution', active: false}]},
    { id: 'TA0003', name: 'Persistence', techniques: [{id: 'T1547', name: 'Boot or Logon Autostart', active: false}, {id: 'T1136', name: 'Create Account', active: false}]},
    { id: 'TA0005', name: 'Defense Evasion', techniques: [{id: 'T1027', name: 'Obfuscated Files', active: true}, {id: 'T1070', name: 'Indicator Removal', active: false}]},
    { id: 'TA0006', name: 'Credential Access', techniques: [{id: 'T1003', name: 'OS Credential Dumping', active: false}]},
    { id: 'TA0007', name: 'Discovery', techniques: [{id: 'T1082', name: 'System Information', active: false}]},
    { id: 'TA0011', name: 'Command & Control', techniques: [{id: 'T1071', name: 'Application Layer Protocol', active: true}]},
    { id: 'TA0040', name: 'Impact', techniques: [{id: 'T1486', name: 'Data Encrypted for Impact', active: true}]},
];

export const MOCK_TREND_DATA = [
    { name: 'Day 1', Critical: 2, High: 5, Medium: 10, Low: 20 },
    { name: 'Day 2', Critical: 1, High: 7, Medium: 12, Low: 22 },
    { name: 'Day 3', Critical: 3, High: 6, Medium: 15, Low: 18 },
    { name: 'Day 4', Critical: 2, High: 8, Medium: 13, Low: 25 },
    { name: 'Day 5', Critical: 4, High: 9, Medium: 11, Low: 23 },
    { name: 'Day 6', Critical: 1, High: 7, Medium: 18, Low: 30 },
    { name: 'Day 7', Critical: 5, High: 12, Medium: 20, Low: 28 },
];

export const MOCK_EFFICIENCY_DATA = [
    { name: 'Triaged by AI', value: 450, fill: '#00aaff' },
    { name: 'False Positives Reduced', value: 120, fill: '#22c55e' },
    { name: 'Automated Resolutions', value: 210, fill: '#eab308' },
    { name: 'Manual Resolutions', value: 90, fill: '#f97316' },
];

export const MOCK_KPI_DATA: Record<UserRole, KpiData> = {
  [UserRole.ANALYST]: {
    activeAlerts: { trend: 2.5 },
    threatsBlocked: { value: '1,421', trend: 5.1 },
    mttd: { value: '15m 45s', trend: -2.0 },
    mttr: { value: '1h 30m', trend: 1.5 },
    agentsActive: { value: '12' },
  },
  [UserRole.MANAGER]: {
    activeAlerts: { trend: 2.5 },
    threatsBlocked: { value: '1.4k', trend: 5.1 },
    mttd: { value: '15m', trend: -2.0 },
    mttr: { value: '1.5h', trend: 1.5 },
    agentsActive: { value: '12' },
  },
  [UserRole.CISO]: {
    activeAlerts: { trend: 2.5 },
    threatsBlocked: { value: '75.6k', trend: 1.2 },
    mttd: { value: '< 20m', trend: -4.5 },
    mttr: { value: '< 2h', trend: -8.1 },
    agentsActive: { value: '12' },
  },
};
