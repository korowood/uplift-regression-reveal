
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BarChart3, TrendingUp, Users, Target, Brain, AlertTriangle, ArrowRight, Zap } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Uplift Modeling для задач регрессии",
    subtitle: "Проблематика и вызовы машинного обучения",
    content: (
      <div className="text-center space-y-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
          <TrendingUp className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Uplift Modeling</h2>
          <p className="text-xl">Оценка причинно-следственных эффектов в регрессионных задачах</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Классический Uplift</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>Бинарный таргет (1/0)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>Рандомизированные кампании</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>Uplift@k, AUUC, Qini с нормировкой</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-green-800 mb-4">Регрессионный Uplift</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>Вещественный таргет (сумма покупки)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>Флаг покупки отдельно</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>Нет рандомизации</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>Метрики без нормировки</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Основные проблемы регрессионного uplift",
    subtitle: "Вызовы, отличающие от классического подхода",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
              <h3 className="font-bold text-red-700">1. Зависимость метрик от датасета</h3>
            </div>
            <p className="text-red-700">Без нормировки сложно сравнивать результаты между разными наборами данных</p>
          </div>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-6 h-6 text-orange-500 mr-2" />
              <h3 className="font-bold text-orange-700">2. Семплирование контрольной группы (T=0)</h3>
            </div>
            <p className="text-orange-700">При создании синтетической контрольной группы модель может переобучиться на особенностях данных</p>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
              <h3 className="font-bold text-yellow-700">3. Подходы к моделированию</h3>
            </div>
            <p className="text-yellow-700">Классические meta-learners требуют адаптации для работы с вещественными таргетами</p>
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Структура данных в регрессионном uplift:</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border">
              <h4 className="font-medium text-blue-600 mb-2">Тестовая группа</h4>
              <code className="text-sm">X_data_test, Y_test</code>
              <p className="text-xs text-gray-600 mt-1">Получили воздействие</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <h4 className="font-medium text-green-600 mb-2">Контрольная группа</h4>
              <code className="text-sm">X_data_control, Y_control</code>
              <p className="text-xs text-gray-600 mt-1">Без воздействия</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "X-learner для регрессионного uplift",
    subtitle: "Детальный алгоритм решения проблем",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-xl mb-6">
          <h3 className="text-2xl font-bold mb-2">X-learner Algorithm</h3>
          <p>Четырёхэтапный процесс для оценки индивидуальных эффектов</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <Card className="border-l-4 border-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
                Обучение базовых моделей
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">MODEL1 (Контрольная)</h4>
                  <code className="text-sm bg-white p-2 rounded block">
                    X_data_control(T=0) → MODEL1 → Y_control
                  </code>
                  <p className="text-xs text-gray-600 mt-2">Предсказывает результат без воздействия</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">MODEL2 (Тестовая)</h4>
                  <code className="text-sm bg-white p-2 rounded block">
                    X_data_test(T=1) → MODEL2 → Y_test
                  </code>
                  <p className="text-xs text-gray-600 mt-2">Предсказывает результат с воздействием</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-green-500">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
                Вычисление псевдо-эффектов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Delta0 (для тестовой группы)</h4>
                  <code className="text-sm bg-white p-2 rounded block">
                    delta0 = Y_test - MODEL1.predict(X_data_test)
                  </code>
                  <p className="text-xs text-gray-600 mt-2">Разность между фактом и контрфактом</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Delta1 (для контрольной группы)</h4>
                  <code className="text-sm bg-white p-2 rounded block">
                    delta1 = MODEL2.predict(X_data_control) - Y_control
                  </code>
                  <p className="text-xs text-gray-600 mt-2">Разность между контрфактом и фактом</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-700">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
                Обучение uplift моделей
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">MODEL3 (для delta0)</h4>
                  <code className="text-sm bg-white p-2 rounded block">
                    X_data_test → MODEL3 → delta0
                  </code>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">MODEL4 (для delta1)</h4>
                  <code className="text-sm bg-white p-2 rounded block">
                    X_data_control → MODEL4 → delta1
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-red-500">
            <CardHeader>
              <CardTitle className="flex items-center text-red-700">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
                Финальная оценка uplift
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <code className="text-lg bg-white px-4 py-2 rounded font-mono">
                  τ(X) = g(X) * MODEL3.predict(X) + (1-g(X)) * MODEL4.predict(X)
                </code>
                <p className="text-sm text-gray-600 mt-2">где g(X) - весовая функция (например, propensity score)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Математическая формулировка X-learner",
    subtitle: "Теоретическое обоснование подхода",
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Основная идея X-learner</h3>
          <p className="text-gray-700">
            X-learner использует информацию из обеих групп для лучшей оценки контрфактических результатов, 
            особенно эффективен при дисбалансе размеров групп.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Этап 1: Базовые предсказания</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded">
                  <code>μ₀(x) = E[Y(0)|X=x]</code>
                  <div className="text-xs text-gray-600 mt-1">MODEL1 на контрольной группе</div>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <code>μ₁(x) = E[Y(1)|X=x]</code>
                  <div className="text-xs text-gray-600 mt-1">MODEL2 на тестовой группе</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Этап 2: Псевдо-outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-orange-50 p-3 rounded">
                  <code>D₀ᵢ = Yᵢ - μ̂₀(Xᵢ)</code>
                  <div className="text-xs text-gray-600 mt-1">для тестовой группы (T=1)</div>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <code>D₁ᵢ = μ̂₁(Xᵢ) - Yᵢ</code>
                  <div className="text-xs text-gray-600 mt-1">для контрольной группы (T=0)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Этап 3: Uplift модели</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">τ̂₀(x)</h4>
                <p className="text-sm">Модель для предсказания D₀ на признаках тестовой группы</p>
                <code className="text-xs bg-white p-1 rounded mt-1 block">MODEL3: X_test → D₀</code>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">τ̂₁(x)</h4>
                <p className="text-sm">Модель для предсказания D₁ на признаках контрольной группы</p>
                <code className="text-xs bg-white p-1 rounded mt-1 block">MODEL4: X_control → D₁</code>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Этап 4: Комбинирование оценок</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-center mb-4">
                <code className="text-lg bg-white px-4 py-2 rounded font-mono">
                  τ(x) = g(x) · τ̂₀(x) + (1-g(x)) · τ̂₁(x)
                </code>
              </div>
              <div className="text-sm text-gray-600">
                <p><strong>g(x)</strong> - весовая функция, часто используется:</p>
                <ul className="mt-2 space-y-1">
                  <li>• Propensity score: e(x) = P(T=1|X=x)</li>
                  <li>• Размер групп: n₁/(n₀+n₁)</li>
                  <li>• Константа 0.5 для простоты</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 5,
    title: "Преимущества X-learner для регрессии",
    subtitle: "Почему X-learner эффективен в регрессионных задачах",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <Card className="border-l-4 border-green-500">
            <CardHeader>
              <CardTitle className="text-green-700">✓ Преимущества</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Zap className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <strong>Использует всю информацию:</strong>
                    <p className="text-sm text-gray-600">Каждая группа помогает предсказать контрфакт для другой</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <strong>Робустность к дисбалансу:</strong>
                    <p className="text-sm text-gray-600">Хорошо работает при разных размерах групп</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <strong>Гибкость моделирования:</strong>
                    <p className="text-sm text-gray-600">Можно использовать разные алгоритмы для каждого этапа</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <strong>Лучше для регрессии:</strong>
                    <p className="text-sm text-gray-600">Эффективно обрабатывает непрерывные таргеты</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-orange-500">
            <CardHeader>
              <CardTitle className="text-orange-700">⚠ Ограничения</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <strong>Сложность реализации:</strong>
                    <p className="text-sm text-gray-600">Требует обучения 4 моделей</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <strong>Выбор весовой функции:</strong>
                    <p className="text-sm text-gray-600">g(x) критически влияет на результат</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <strong>Накопление ошибок:</strong>
                    <p className="text-sm text-gray-600">Ошибки моделей могут аккумулироваться</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Сравнение с другими Meta-learners</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Метод</th>
                    <th className="text-left p-2">Модели</th>
                    <th className="text-left p-2">Дисбаланс групп</th>
                    <th className="text-left p-2">Регрессия</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">T-learner</td>
                    <td className="p-2">2</td>
                    <td className="p-2 text-orange-600">Проблемы</td>
                    <td className="p-2 text-green-600">Хорошо</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">S-learner</td>
                    <td className="p-2">1</td>
                    <td className="p-2 text-green-600">Ок</td>
                    <td className="p-2 text-orange-600">Средне</td>
                  </tr>
                  <tr className="border-b bg-blue-50">
                    <td className="p-2 font-medium">X-learner</td>
                    <td className="p-2">4</td>
                    <td className="p-2 text-green-600">Отлично</td>
                    <td className="p-2 text-green-600">Отлично</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-3">Практические рекомендации:</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Для MODEL1 и MODEL2:</h4>
              <ul className="space-y-1">
                <li>• Gradient Boosting (XGBoost, LightGBM)</li>
                <li>• Random Forest</li>
                <li>• Neural Networks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Для MODEL3 и MODEL4:</h4>
              <ul className="space-y-1">
                <li>• Регрессионные модели</li>
                <li>• Регуляризация (Ridge, Lasso)</li>
                <li>• Cross-validation для гиперпараметров</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Метрики оценки качества",
    subtitle: "Специфика метрик для регрессионного uplift",
    content: (
      <div className="space-y-6">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <h3 className="font-bold text-yellow-800 mb-2">Ключевая проблема:</h3>
          <p className="text-yellow-700">В регрессионном uplift метрики не нормализуются, что делает их зависимыми от масштаба данных</p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Классические метрики</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Uplift@k</h4>
                  <p className="text-sm mb-2">Суммарный uplift для топ-k% объектов</p>
                  <code className="text-xs bg-white p-2 rounded block">
                    Σ(Y_treated - Y_control) для топ-k%
                  </code>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">AUUC</h4>
                  <p className="text-sm mb-2">Area Under Uplift Curve</p>
                  <code className="text-xs bg-white p-2 rounded block">
                    ∫ uplift_curve dx
                  </code>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Qini коэффициент</h4>
                  <p className="text-sm mb-2">Площадь под Qini кривой</p>
                  <code className="text-xs bg-white p-2 rounded block">
                    Qini = AUUC / max_possible_AUUC
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Проблемы в регрессии</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-2">Отсутствие нормировки</h4>
                  <p className="text-sm">Метрики зависят от абсолютных значений таргета</p>
                  <div className="text-xs text-gray-600 mt-2">
                    Пример: uplift@10% = 1000₽ vs 100₽ - какой лучше?
                  </div>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-700 mb-2">Сравнимость датасетов</h4>
                  <p className="text-sm">Невозможно сравнить модели на разных данных</p>
                  <div className="text-xs text-gray-600 mt-2">
                    B2B vs B2C: разные масштабы покупок
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 mb-2">Влияние выбросов</h4>
                  <p className="text-sm">Экстремальные значения сильно искажают метрики</p>
                  <div className="text-xs text-gray-600 mt-2">
                    Один клиент с uplift 10000₽ >> 100 клиентов с uplift 50₽
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Предлагаемые решения</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-2">Относительные метрики</h4>
                <code className="text-xs bg-white p-1 rounded block mb-2">
                  Relative_Uplift@k = Uplift@k / Baseline_Revenue
                </code>
                <p className="text-xs text-gray-600">Нормировка на базовый доход</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Процентные метрики</h4>
                <code className="text-xs bg-white p-1 rounded block mb-2">
                  Uplift_Rate@k = (Treated_k - Control_k) / Control_k
                </code>
                <p className="text-xs text-gray-600">Процентное увеличение</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">Робастные метрики</h4>
                <code className="text-xs bg-white p-1 rounded block mb-2">
                  Median_Uplift@k, IQR_Uplift@k
                </code>
                <p className="text-xs text-gray-600">Устойчивые к выбросам</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Пример сравнения метрик:</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Датасет</th>
                  <th className="text-left p-2">Uplift@10%</th>
                  <th className="text-left p-2">Relative Uplift@10%</th>
                  <th className="text-left p-2">Интерпретация</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">E-commerce</td>
                  <td className="p-2">5000₽</td>
                  <td className="p-2">25%</td>
                  <td className="p-2 text-green-600">Хорошо</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">B2B</td>
                  <td className="p-2">50000₽</td>
                  <td className="p-2">10%</td>
                  <td className="p-2 text-orange-600">Средне</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "Заключение и рекомендации",
    subtitle: "Ключевые выводы для практического применения",
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-center">Регрессионный Uplift: Итоги</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Ключевые отличия:</h4>
              <ul className="text-sm space-y-2">
                <li>• Вещественный таргет вместо бинарного</li>
                <li>• Отсутствие рандомизации</li>
                <li>• Метрики без нормировки</li>
                <li>• Больше влияние выбросов</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">X-learner как решение:</h4>
              <ul className="text-sm space-y-2">
                <li>• 4-этапный алгоритм</li>
                <li>• Использует всю информацию</li>
                <li>• Робастен к дисбалансу</li>
                <li>• Эффективен для регрессии</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-green-600">Практические советы</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>• Используйте X-learner для регрессионных задач</li>
                <li>• Экспериментируйте с весовыми функциями</li>
                <li>• Применяйте cross-validation осторожно</li>
                <li>• Проверяйте предположения модели</li>
                <li>• Используйте ансамбли моделей</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-blue-600">Метрики</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>• Разрабатывайте относительные метрики</li>
                <li>• Используйте робастные оценки</li>
                <li>• Учитывайте бизнес-контекст</li>
                <li>• Валидируйте на A/B тестах</li>
                <li>• Мониторьте производительность</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-purple-600">Будущие направления</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>• Deep learning для uplift</li>
                <li>• Bayesian подходы</li>
                <li>• Causal discovery</li>
                <li>• Multi-treatment scenarios</li>
                <li>• Real-time uplift scoring</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4 text-center">Алгоритм внедрения X-learner в продакшн:</h3>
          <div className="grid grid-cols-5 gap-4">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
              <div className="text-xs">Подготовка данных и EDA</div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 self-center" />
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
              <div className="text-xs">Обучение 4 моделей X-learner</div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 self-center" />
            <div className="text-center">
              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
              <div className="text-xs">Валидация на hold-out</div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 self-center" />
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
              <div className="text-xs">A/B тест стратегии</div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 self-center" />
            <div className="text-center">
              <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 text-sm font-bold">5</div>
              <div className="text-xs">Мониторинг и дообучение</div>
            </div>
          </div>
        </div>
        
        <div className="text-center bg-blue-50 p-6 rounded-lg">
          <p className="text-lg text-gray-700">
            <strong>Регрессионный uplift modeling</strong> требует адаптации классических подходов. 
            X-learner предоставляет эффективное решение, но успех зависит от качества данных, 
            правильного выбора метрик и тщательной валидации.
          </p>
        </div>
      </div>
    )
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-800">Uplift Modeling: Regression Problems</h1>
              <p className="text-sm text-gray-600">X-learner и специфика регрессионных задач</p>
            </div>
            <div className="text-sm text-gray-500">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg min-h-[600px]">
          {/* Slide header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
            <h2 className="text-3xl font-bold mb-2">{slides[currentSlide].title}</h2>
            <p className="text-blue-100">{slides[currentSlide].subtitle}</p>
          </div>

          {/* Slide content */}
          <div className="p-8">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Предыдущий
          </Button>

          {/* Slide indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? 'bg-blue-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            Следующий
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Slide overview */}
        <div className="mt-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold mb-3">Содержание презентации:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`text-left p-3 rounded-lg transition-colors text-sm ${
                  index === currentSlide
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="font-medium">{index + 1}. {slide.title}</div>
                <div className="text-xs text-gray-600 mt-1">{slide.subtitle}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
