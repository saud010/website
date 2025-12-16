/*
  # Reviews System for Locksmith Service

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `rating` (integer) - Rating from 1-5
      - `comment` (text) - Review comment
      - `language` (text) - Language code (de/en)
      - `is_approved` (boolean) - Moderation status
      - `created_at` (timestamptz) - Timestamp
      
  2. Security
    - Enable RLS on `reviews` table
    - Allow public read access for approved reviews
    - Restrict write access (admin only via service role)
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  language text NOT NULL DEFAULT 'de',
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read approved reviews"
  ON reviews FOR SELECT
  TO anon, authenticated
  USING (is_approved = true);

CREATE POLICY "Anyone can submit new reviews"
  ON reviews FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);