export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
      {children}
    </div>
  );
}