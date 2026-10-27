import React from 'react';
import { AccessKey } from '../../types/lms';
import { GraduationCap, LogOut, KeyRound, Sparkles, ShieldCheck } from 'lucide-react';

interface TopBarProps {
  activeKey: AccessKey | null;
  onLogout: () => void;
  onOpenKeyModal: () => void;
  onNavigateTab?: (tab: string) => void;
  currentTab?: string;
}

export const TopBar: React.FC<TopBarProps> = ({
  activeKey,
  onLogout,
  onOpenKeyModal,
}) => {
  const isStudent = activeKey?.role === 'student';
  const isAdmin = activeKey?.role === 'admin';
  const isPrimary = isStudent && (activeKey?.grade || 1) <= 5;

  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Wordmark Brand */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-sm transition-transform hover:scale-105 shrink-0 ${
              isPrimary
                ? 'bg-amber-500 shadow-amber-200'
                : 'bg-slate-900 shadow-slate-200'
            }`}
          >
            {isAdmin ? (
              <ShieldCheck className="w-5 h-5" />
            ) : isPrimary ? (
              <Sparkles className="w-5 h-5 text-amber-100" />
            ) : (
              <GraduationCap className="w-5 h-5 text-blue-200" />
            )}
          </div>
          <div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap">
              {(() => {
                const htmlConfig = (typeof window !== 'undefined' ? (window as unknown as { EDUTOKEN_HTML_CONFIG?: Record<string, string> }).EDUTOKEN_HTML_CONFIG : undefined) || {};
                const brand = htmlConfig.brandName || 'EduToken LMS';
                if (brand.includes(' ')) {
                  const parts = brand.split(' ');
                  return (
                    <>
                      {parts[0]}<span className="text-blue-600">{parts.slice(1).join(' ')}</span>
                    </>
                  );
                }
                return brand;
              })()}
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation / Info (Desktop) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium text-slate-600 truncate">
          {activeKey ? (
            <div className="flex items-center gap-2 lg:gap-3 truncate">
              <span className="text-slate-400 text-xs">Sesión:</span>
              <span className="font-semibold text-slate-900 truncate max-w-[160px] lg:max-w-[220px]">
                {activeKey.studentName || 'Usuario'}
              </span>
              <span className="text-slate-300">·</span>
              <span
                className={`font-mono text-xs px-2 py-0.5 rounded-md font-semibold shrink-0 ${
                  isAdmin
                    ? 'bg-purple-100 text-purple-800'
                    : isPrimary
                    ? 'bg-amber-100 text-amber-900'
                    : 'bg-blue-100 text-blue-900'
                }`}
              >
                {isAdmin
                  ? 'ADMIN'
                  : `GRADO ${activeKey.grade}° (${isPrimary ? 'PRIMARIA' : 'SECUNDARIA'})`}
              </span>
              <span className="text-slate-300">·</span>
              <span className="font-mono text-xs text-slate-500 truncate">
                {activeKey.keyCode}
              </span>
            </div>
          ) : (
            <span className="text-slate-500 text-xs truncate">
              Plataforma Escolar 1° a 11° · 3 Periodos · 5 Materias Troncales
            </span>
          )}
        </div>

        {/* Zone 2 (Mobile Compact User Badge) */}
        {activeKey && (
          <div className="flex md:hidden items-center gap-1.5 min-w-0 truncate">
            <span className="font-semibold text-xs text-slate-800 truncate max-w-[90px] sm:max-w-[150px]">
              {activeKey.studentName?.split(' ')[0] || 'Usuario'}
            </span>
            <span
              className={`font-mono text-[10px] px-1.5 py-0.5 rounded font-bold shrink-0 ${
                isAdmin
                  ? 'bg-purple-100 text-purple-800'
                  : isPrimary
                  ? 'bg-amber-100 text-amber-900'
                  : 'bg-blue-100 text-blue-900'
              }`}
            >
              {isAdmin ? 'Admin' : `${activeKey.grade}°`}
            </span>
          </div>
        )}

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {activeKey ? (
            <>
              <button
                onClick={onOpenKeyModal}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap min-h-[36px]"
                title="Cambiar o verificar llave"
              >
                <KeyRound className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span className="hidden sm:inline">Cambiar Llave</span>
              </button>
              <button
                onClick={onLogout}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition-colors whitespace-nowrap min-h-[36px]"
                title="Salir de la sesión"
              >
                <LogOut className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">Salir</span>
              </button>
            </>
          ) : (
            <button
              onClick={onOpenKeyModal}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all whitespace-nowrap min-h-[36px]"
            >
              <KeyRound className="w-4 h-4" />
              <span>Ingresar</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
