import { useState, useEffect } from 'react';
import { Star, Send } from 'lucide-react';
import { Language, useTranslation } from '../lib/i18n';
import { supabase, Review } from '../lib/supabase';

interface ReviewsProps {
  language: Language;
}

export function Reviews({ language }: ReviewsProps) {
  const t = useTranslation(language);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    loadReviews();
  }, [language]);

  async function loadReviews() {
    setLoading(true);
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('language', language)
      .eq('is_approved', true)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setReviews(data);
    }
    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from('reviews').insert({
      name: formData.name,
      rating: formData.rating,
      comment: formData.comment,
      language,
      is_approved: false,
    });

    if (!error) {
      setSubmitted(true);
      setFormData({ name: '', rating: 5, comment: '' });
      setTimeout(() => {
        setSubmitted(false);
        setShowForm(false);
      }, 3000);
    }

    setSubmitting(false);
  }

  function renderStars(rating: number, interactive: boolean = false) {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? 'button' : undefined}
            onClick={interactive ? () => setFormData({ ...formData, rating: star }) : undefined}
            className={interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}
            disabled={!interactive}
          >
            <Star
              className={`w-6 h-6 ${
                star <= rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-slate-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  }

  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : '0';

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              {t.reviews.title}
            </h1>
            <p className="text-xl text-slate-600 mb-6">{t.reviews.subtitle}</p>

            {reviews.length > 0 && (
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  {renderStars(Math.round(parseFloat(averageRating)))}
                  <span className="text-2xl font-bold text-slate-900">{averageRating}</span>
                  <span className="text-slate-600">({reviews.length} {t.reviews.title})</span>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              {t.reviews.writeReview}
            </button>
          </div>

          {showForm && (
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{t.reviews.writeReview}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.reviews.yourName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.reviews.rating}
                  </label>
                  {renderStars(formData.rating, true)}
                </div>

                <div>
                  <label htmlFor="comment" className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.reviews.comment}
                  </label>
                  <textarea
                    id="comment"
                    required
                    rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    {t.reviews.pending}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  <span>{submitting ? '...' : t.reviews.submit}</span>
                </button>
              </form>
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">{t.reviews.noReviews}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-slate-900">{review.name}</h3>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-slate-600 mb-4">{review.comment}</p>
                  <p className="text-sm text-slate-400">
                    {new Date(review.created_at).toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US')}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
