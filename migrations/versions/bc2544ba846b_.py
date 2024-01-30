"""empty message

Revision ID: bc2544ba846b
Revises: 8214c50c5caa
Create Date: 2024-01-30 11:43:37.826261

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bc2544ba846b'
down_revision = '8214c50c5caa'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('carrera', schema=None) as batch_op:
        batch_op.add_column(sa.Column('capacidad', sa.Integer(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('carrera', schema=None) as batch_op:
        batch_op.drop_column('capacidad')

    # ### end Alembic commands ###
