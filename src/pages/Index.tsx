
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BarChart3, TrendingUp, Users, Target, Brain, AlertTriangle } from 'lucide-react';

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
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <Users className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-semibold">Контрольная группа</h3>
            <p className="text-sm text-gray-600">T = 0</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <Target className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-semibold">Тестовая группа</h3>
            <p className="text-sm text-gray-600">T = 1</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <Brain className="w-8 h-8 text-purple-600 mb-2" />
            <h3 className="font-semibold">Uplift Effect</h3>
            <p className="text-sm text-gray-600">Δ = E[Y|T=1] - E[Y|T=0]</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Основная проблематика",
    subtitle: "Фундаментальная проблема каузального вывода",
    content: (
      <div className="space-y-6">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
          <div className="flex items-center mb-3">
            <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
            <h3 className="font-bold text-red-700">Fundamental Problem of Causal Inference</h3>
          </div>
          <p className="text-red-700">Невозможно одновременно наблюдать результат для одного объекта в двух состояниях</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-6 border rounded-lg shadow-sm">
            <h4 className="font-semibold mb-4 text-gray-800">Наблюдаемые данные:</h4>
            <div className="space-y-3">
              <div className="bg-blue-100 p-3 rounded">
                <code className="text-sm">Y(T=0) - наблюдаемо для контрольной группы</code>
              </div>
              <div className="bg-green-100 p-3 rounded">
                <code className="text-sm">Y(T=1) - наблюдаемо для тестовой группы</code>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 border rounded-lg shadow-sm">
            <h4 className="font-semibold mb-4 text-gray-800">Ненаблюдаемые контрфакты:</h4>
            <div className="space-y-3">
              <div className="bg-gray-200 p-3 rounded">
                <code className="text-sm">Y(T=1) - для контрольной группы</code>
              </div>
              <div className="bg-gray-200 p-3 rounded">
                <code className="text-sm">Y(T=0) - для тестовой группы</code>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h4 className="font-semibold text-yellow-800 mb-2">Индивидуальный Treatment Effect (ITE):</h4>
          <div className="text-center">
            <code className="text-lg bg-yellow-100 px-4 py-2 rounded font-mono">
              τᵢ = Y₁ᵢ - Y₀ᵢ
            </code>
          </div>
          <p className="text-sm text-yellow-700 mt-2 text-center">где Y₁ᵢ и Y₀ᵢ никогда не наблюдаются одновременно</p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Математическая формулировка",
    subtitle: "Модели и оценки эффектов",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Модель 1: Прямое моделирование</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded">
                  <code>E[Y | T=0] = μ₀(X)</code>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <code>E[Y | T=1] = μ₁(X)</code>
                </div>
                <div className="bg-purple-50 p-3 rounded font-semibold">
                  <code>τ(X) = μ₁(X) - μ₀(X)</code>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Модель 2: Meta-learners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm">
                  <strong>T-learner:</strong>
                  <div className="mt-1 space-y-1">
                    <div className="bg-blue-50 p-2 rounded text-xs">
                      <code>μ₀ = train_on(X[T=0], Y[T=0])</code>
                    </div>
                    <div className="bg-green-50 p-2 rounded text-xs">
                      <code>μ₁ = train_on(X[T=1], Y[T=1])</code>
                    </div>
                  </div>
                </div>
                <div className="text-sm">
                  <strong>S-learner:</strong>
                  <div className="bg-gray-50 p-2 rounded text-xs mt-1">
                    <code>μ = train_on([X,T], Y)</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Проблемы оценки качества</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-700 mb-2">Selection Bias</h4>
                <p className="text-sm">Нерандомизированное назначение treatment'а</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-700 mb-2">Confounding</h4>
                <p className="text-sm">Скрытые переменные влияют на T и Y</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-700 mb-2">Evaluation</h4>
                <p className="text-sm">Отсутствие ground truth для τ(X)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 4,
    title: "Специфика регрессионных задач",
    subtitle: "Особенности непрерывных целевых переменных",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Вызовы в регрессии
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Гетероскедастичность:</strong>
                    <p className="text-sm text-gray-600">Различная дисперсия в группах</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Нелинейные эффекты:</strong>
                    <p className="text-sm text-gray-600">τ(X) может быть сложной функцией</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Выбросы:</strong>
                    <p className="text-sm text-gray-600">Сильное влияние на оценки</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Метрики качества</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <strong>RMSE on uplift:</strong>
                  <div className="mt-1 font-mono text-sm">
                    √(E[(τ̂(X) - τ(X))²])
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <strong>Rank correlation:</strong>
                  <div className="mt-1 text-sm">
                    Качество ранжирования по uplift
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <strong>Policy value:</strong>
                  <div className="mt-1 text-sm">
                    Ожидаемое улучшение от стратегии
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Пример: Маркетинговая кампания</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">Y</div>
                  <div className="text-sm">Выручка от клиента (₽)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">T</div>
                  <div className="text-sm">Получение купона (0/1)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">τ(X)</div>
                  <div className="text-sm">Прирост выручки от купона</div>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-gray-600">
                Цель: определить клиентов с максимальным ожидаемым приростом выручки
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 5,
    title: "Современные подходы и решения",
    subtitle: "Методы борьбы с основными проблемами",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Causal ML подходы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Double ML (DML)</h4>
                  <p className="text-sm text-gray-600">Ортогонализация оценок через cross-fitting</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Causal Forests</h4>
                  <p className="text-sm text-gray-600">Дерево решений для гетерогенных эффектов</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">X-learner</h4>
                  <p className="text-sm text-gray-600">Улучшенная версия meta-learners</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Техники валидации</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <h4 className="font-semibold">Synthetic data</h4>
                  <p className="text-sm">Генерация данных с известным τ(X)</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold">Cross-validation</h4>
                  <p className="text-sm">Специальные схемы для causal inference</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-semibold">A/B testing</h4>
                  <p className="text-sm">Контролируемые эксперименты</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Практические рекомендации</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-700">✓ Лучшие практики:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Использование propensity score для взвешивания</li>
                  <li>• Проверка предположений (CIA, overlap)</li>
                  <li>• Ensemble методы для робустности</li>
                  <li>• Регуляризация для предотвращения overfitting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-red-700">✗ Частые ошибки:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Игнорирование selection bias</li>
                  <li>• Использование стандартных ML метрик</li>
                  <li>• Недостаточная проверка assumptions</li>
                  <li>• Переоценка статистической значимости</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 6,
    title: "Заключение",
    subtitle: "Ключевые выводы и направления развития",
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-center">Основные вызовы Uplift в регрессии</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Теоретические:</h4>
              <ul className="text-sm space-y-1">
                <li>• Fundamental problem of causal inference</li>
                <li>• Необходимость сильных предположений</li>
                <li>• Сложность оценки индивидуальных эффектов</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Практические:</h4>
              <ul className="text-sm space-y-1">
                <li>• Отсутствие ground truth для валидации</li>
                <li>• Чувствительность к выбросам</li>
                <li>• Необходимость домен-экспертизы</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-blue-600">Исследования</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>• Neural causal models</li>
                <li>• Bayesian approaches</li>
                <li>• Deep learning для ITE</li>
                <li>• Multi-task learning</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-green-600">Инструменты</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>• CausalML (Uber)</li>
                <li>• EconML (Microsoft)</li>
                <li>• DoWhy (Microsoft)</li>
                <li>• scikit-uplift</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-purple-600">Применения</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>• Персонализация маркетинга</li>
                <li>• Медицина (treatment effects)</li>
                <li>• Экономика (policy evaluation)</li>
                <li>• Оптимизация продуктов</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center bg-gray-50 p-6 rounded-lg">
          <p className="text-lg text-gray-700">
            <strong>Uplift modeling</strong> - активно развивающаяся область на стыке ML и causal inference, 
            требующая глубокого понимания как статистических, так и предметных аспектов задачи.
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
              <p className="text-sm text-gray-600">Машинное обучение и каузальный вывод</p>
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
