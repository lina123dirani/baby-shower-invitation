// Each invitation can carry its own date: ?date=2027-12-20
// The countdown and the written date both follow that link.
const MONTHS = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
]

const DEFAULT_DATE = '2027-09-16T16:00:00+03:00'

function inviteDate() {
  const params = new URLSearchParams(window.location.search)
  const raw = params.get('date')
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw || '')) return new Date(DEFAULT_DATE)
  const time = /^\d{2}:\d{2}$/.test(params.get('time') || '') ? params.get('time') : '16:00'
  const parsed = new Date(`${raw}T${time}:00+03:00`)
  return Number.isNaN(parsed.getTime()) ? new Date(DEFAULT_DATE) : parsed
}

export function getInvite() {
  const date = inviteDate()
  return {
    date,
    baby: 'لورا',
    dateLabel: `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`,
    timeLabel: 'تمام الساعة الرابعة مساءً',
    place: 'في منزل العائلة بحي المزة',
  }
}
