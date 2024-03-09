import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices' },
                    {
                        label: 'Edit Invoice',
                        href: `/dashboard/invoices/${params.id}/edit`,
                        active: true,
                    },
                ]}
            />
            <p>invoice {params.id}</p>
        </main>
    );
}