@echo off
echo ========================================
echo  Iniciando serviço Monitor em localhost:3001
echo ========================================
kubectl port-forward svc/monitor-service 3001:3000
pause
